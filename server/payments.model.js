const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
    cart: {type: [String], default: [], required: true},
    amount: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId },
    createdAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model("Payment", paymentsSchema);

module.exports = Payment;