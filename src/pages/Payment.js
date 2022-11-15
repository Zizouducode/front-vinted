import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutFrom from "../components/CheckoutForm";

const Payment = ({ userId }) => {
  //Get the params in the URL
  const location = useLocation();
  const { title, price, offerId } = location.state;
  //States and variables
  const protectionFees = 0.4;
  const deliveryFees = 0.8;
  const total = protectionFees + deliveryFees + price;

  //Connect to stripe
  const stripePromise = loadStripe(
    "pk_test_51M4OpMCacX0zWTEQFBkkfbiRT06Ov1u1C6KYqBGdi0DSSH6BzMel57xXCKqP0mQsWz3dN62HTLq01Quw4WXVpNYk00OSnrNiVf"
  );

  return (
    <div className="container payment-checkout-form">
      <span>Résumé de la commande</span>
      <div>
        <span>Commande</span>
        <span>{price} €</span>
      </div>
      <div>
        <span>Frais de protection acheteurs </span>
        <span>{protectionFees} €</span>
      </div>
      <div>
        <span>Frais de port </span>
        <span>{deliveryFees} €</span>
      </div>
      <div>
        <span>Total </span>
        <span>{total} €</span>
      </div>
      <p>
        {`Il ne vous plus qu'une étape pour vous offrir ${title}. Vous allez payer
        5.15 € (frais de protection acheteur et frais de port inclus)`}
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutFrom userId={userId} offerId={offerId} />
      </Elements>
    </div>
  );
};

export default Payment;
