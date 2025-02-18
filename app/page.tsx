'use client'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeElement from "./components/StripeElement/page";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const Home = () => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: 1500,
        currency: "usd",
      }}>
      <StripeElement />
    </Elements>
  )
}

export default Home