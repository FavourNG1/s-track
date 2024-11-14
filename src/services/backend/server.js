const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe("YOUR_SECRET_KEY"); // Replace with your Stripe secret key

const app = express();
app.use(express.json());

app.post("/create-subscription", async (req, res) => {
  const { customerId, priceId } = req.body;

  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    res.json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
