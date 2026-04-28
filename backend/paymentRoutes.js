const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');

// Route to create a Stripe checkout session when "Buy Now" is clicked
router.post('/create-checkout-session', paymentController.createCheckoutSession);

// Webhook route for Stripe to notify us of successful payments (must be raw body)
router.post('/webhook', express.raw({ type: 'application/json' }), paymentController.handleWebhook);

module.exports = router;