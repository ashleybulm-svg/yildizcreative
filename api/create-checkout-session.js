const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  try {
    const { service, amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: service || "Yildiz Creative Studio Service",
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],

      success_url: "https://www.yildizcreativestudio.com/success",
      cancel_url: "https://www.yildizcreativestudio.com/cancel",
    });

    return res.status(200).json({
      url: session.url,
    });
  } catch (err) {
    console.error("Stripe Error:", err);

    return res.status(500).json({
      error: err.message,
    });
  }
};