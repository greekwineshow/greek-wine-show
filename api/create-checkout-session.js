export const config = {
  runtime: "nodejs",
};

import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const PRICE_TABLE = {
    1: 86000,
    2: 112000,
    3: 138000,
    4: 176000,
    5: 200000,
    6: 228000
  };

  const { guests } = req.body;

  if (!PRICE_TABLE[guests]) {
    return res.status(400).json({ error: "Invalid guest count" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "The Grand Two-Day Greek Wine Journey",
              description:
                "A two-day escape into the heart of Greek wine culture. Wander through legendary Nemea vineyards, taste rare cellar-only wines, meet the winemakers shaping Greece’s modern wine story and unwind in a peaceful overnight stay surrounded by mountains and vines."
            },
            unit_amount: PRICE_TABLE[guests]
          },
          quantity: 1
        }
      ],
      success_url: "https://greekwineshow.com",
      cancel_url: "https://greekwineshow.com"
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Stripe session error" });
  }
}
