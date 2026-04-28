const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const db = require('./db/pool');

exports.createCheckoutSession = async (req, res) => {
  try {
    const { courseId, userId } = req.body;
    
    // In a real app, you fetch course details from DB
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Full-Stack Frontend Mastery',
            },
            unit_amount: 4999, // $49.99
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: {
        userId: userId,
        courseId: courseId,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
};

exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Extract metadata
    const { userId, courseId } = session.metadata;

    // Update PostgreSQL database to mark user as enrolled
    try {
      await db.query(
        'INSERT INTO Payments (user_id, course_id, stripe_session_id, amount, status) VALUES ($1, $2, $3, $4, $5)',
        [userId, courseId, session.id, session.amount_total / 100, 'COMPLETED']
      );
      
      console.log(`User ${userId} successfully enrolled in Course ${courseId}`);
    } catch (dbErr) {
      console.error('Database enrollment failed:', dbErr);
    }
  }

  res.status(200).end();
};