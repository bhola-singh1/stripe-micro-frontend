const stripe = require('stripe')('sk_test_51NdtKMSD3RNOdc9ssbot9EalBj0RjzFr12rBjhRH2RVnGi9lgPqo5qZwsYOoZUcKWfErmlmijD9XobdQiWsYFaUR00xhOU2fp3');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1NhpSDSD3RNOdc9sI137jr9L',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}