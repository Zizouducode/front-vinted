import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutFrom from "../components/CheckoutForm";

const Payment = ({ userId }) => {
  //Get the params in the URL
  const location = useLocation();
  const { title, price, offerId } = location.state;
  // console.log(title);
  // console.log(price);
  // console.log(offerId);
  //States and variables
  const protectionFees = 1.0;
  const deliveryFees = 2.0;
  const totalPrice = protectionFees + deliveryFees + price;

  //Connect to stripe
  const stripePromise = loadStripe(
    "pk_test_51M4OpMCacX0zWTEQFBkkfbiRT06Ov1u1C6KYqBGdi0DSSH6BzMel57xXCKqP0mQsWz3dN62HTLq01Quw4WXVpNYk00OSnrNiVf"
  );

  return (
    <div className="payment-background">
      <div className="container payment-checkout-form">
        <span className="payment-checkout-form-summary">
          Résumé de la commande
        </span>
        <div className="payment-checkout-form-price-summary">
          <div className="payment-checkout-form-row">
            <span>Commande</span>
            <span>{price} €</span>
          </div>
          <div className="payment-checkout-form-row">
            <span>Frais de protection acheteurs </span>
            <span>{protectionFees.toFixed(2)} €</span>
          </div>
          <div className="payment-checkout-form-row">
            <span>Frais de port </span>
            <span>{deliveryFees.toFixed(2)} €</span>
          </div>
        </div>

        <div className="payment-checkout-form-total">
          <span>Total </span>
          <span>{totalPrice.toFixed(2)} €</span>
        </div>
        <p className="payment-checkout-form-paragraph">
          Il ne vous plus qu'une étape pour vous offrir <span>{title}</span>.
          Vous allez payer <span>{totalPrice.toFixed(2)}</span>€ (frais de
          protection acheteur et frais de port inclus).
        </p>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutFrom
              userId={userId}
              offerId={offerId}
              totalPrice={totalPrice.toFixed(2)}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
