const express = require('express');
const router = express.Router();
const User = require("./user.model.js");
const userController = require("./user.controller.js");
const { check, validationResult } = require("express-validator");

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array() });
    }
    next();
};

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