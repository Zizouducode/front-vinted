import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutFrom = ({ userId, offerId, totalPrice }) => {
  //Create payment
  const stripe = useStripe();
  //Get the user credit card input
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState();
  // console.log(offerId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      //Get the inputs from the user
      const cardElement = elements.getElement(CardElement);
      //Send this information to stripe to get a token
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      //   console.log(stripeResponse.token.id);
      //Token to send to the backend to make the request payment
      const stripeToken = stripeResponse.token.id;
      //Request to send the token
      const response = await axios.post(
        "https://site--backend-vinted--nfqr62d7mh6n.code.run/payment",
        {
          stripeToken: stripeToken,
          offerId: offerId,
          totalPrice: totalPrice,
        }
      );
      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }

      // console.log(response.status);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setPaymentFailed(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="payment-checkout-form-stripe-container">
        <div>
          <CardElement />
        </div>
      </div>
      {isLoading ? (
        <p className="payment-checkout-form-payment-loading">
          Paiment en cours
        </p>
      ) : completed ? (
        <p className="payment-checkout-form-payment-valid">
          Payement validé. Merci pour votre achat !
        </p>
      ) : paymentFailed ? (
        <p className="payment-checkout-form-payment-failed">
          Echec du paiement !
        </p>
      ) : (
        <button className="payment-checkout-form-payment-button"> Payer</button>
      )}
    </form>
  );
};

export default CheckoutFrom;
