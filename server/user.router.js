const express = require('express');
const router = express.Router();
const User = require("./user.model.js");
const Item = require("./item.model.js");
const {authMiddleware} = require("./middlewares.js");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

router.param("userId", (req, res, next, userId) => {
    User.findById(userId, (err, user) => {
        if(err) return handleError(err, res);
        if(!user) return handleError("user not found", res);

        req.user = user;
        next();
    });
});

router.param("itemId", (req, res, next, itemId) => {
    Item.findById(itemId, (err, item) => {
        if(err) return handleError(err, res);
        if(!item) return handleError("item not found", res);

        req.item = item;
        next();
    });
});

router.get("/:userId", authMiddleware, (req,res) => {
    res.send(req.user);
});

/* add an item to a cart */
router.put("/:userId/cart/:itemId", (req, res) => {
    req.user.cart.push(req.item._id.toString());
    req.user.save((err) => {
        if(err) return handleError(err, res);

        res.send(200);
    });
});

/* remove  an item to a cart */
router.delete("/:userId/cart/:itemId", (req, res) => {
    const index = req.user.cart.findIndex(itemId => itemId === req.item._id.toString());
    req.user.cart.splice(index, 1);

    req.user.save((err) => {
        if(err) return handleError(err, res);

        res.send(200);
    });
});


/* Gets all users */
router.get("/", (req,res) => {
    console.log("gets all users");
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

/* Deletes all users */
router.delete("/", (req, res) => {
   User.deleteMany({}, (err, docs) => {
       if(err) return handleError(err, res);
       console.log(docs);
       console.log("success delete many users");
       res.send(204);
   })
});

function handleError(err, res) {
    console.log(err);
    res.send(500);
}

router.post("/:userId/checkout", authMiddleware, async (req, res) => {
    const {error, amount} = await req.user.getCartAmount();

    if(error) {
        return res.send(500);
    }

    req.user.createPayment(amount)
        .then(() => {
            return req.user.clearCart();
        })
        .then(() => {
            return stripe.charges.create({
                amount: amount * 100,
                currency: "eur",
                source: req.body.id,
            });
        })
        .then(stripeResponse => {
            console.log("stripe res", stripeResponse);
            res.send(200);
        })
        .catch(() => {
            res.send(500);
        });
});

module.exports = router;