const express = require('express');
const router = express.Router();
const User = require("./user.model.js");
const userController = require("./user.controller.js");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array() });
    }
    next();
};

router.post("/verify", (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader) {
        console.log("jwt verify error 1");
        return res.send(400);
    }
    const token = bearerHeader.split(" ")[1];
    if(!token) {
        console.log("jwt verify error 2");
        return res.send(400);
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) {
            console.log("jwt verify error 3", err);
            return res.status(401).send(err);
        }

        console.log("decoded", decoded);
        res.status(200).send(decoded);
    });
});

router.post("/login", userController.login);
router.post("/signup", [
        check("email").isEmail().normalizeEmail(),
        check("password")
            .isLength({min: 5}).withMessage('must be atleast 5 chars long')
            .matches(/\d/).withMessage('must contain a number')
            .not().isIn(["123", "password1", "parool1"]).withMessage('Do not use a common word as password')
    ],
    validationMiddleware,
    userController.signup);

module.exports = router;