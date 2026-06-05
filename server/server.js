import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 1. Your Stripe secret key (from Stripe Dashboard)
const stripe = new Stripe("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");

// 2. Your price table (your exact guest-count prices)
const PRICE_TABLE = {
  1: 86000,   // €860.00
  2: 112000,  // €1,120.00
  3: 138000,  // €1,380.00
  4: 176000,  // €1,760.00
  5: 200000,  // €2,000.00
  6: 228000   // €2,280.00
};

// 3. Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  const { guests } = req.body;

  // Validate guest count
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
      success_url: "https://your-site.com/success",
      cancel_url: "https://your-site.com/cancel"
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Stripe session error" });
  }
});

// 4. Start backend server
app.listen(4242, () => console.log("Server running on port 4242"));
