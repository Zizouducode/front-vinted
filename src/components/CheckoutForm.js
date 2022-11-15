import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutFrom = ({ userId, offerId }) => {
  //Create payment
  const stripe = useStripe();
  //Get the user credit card input
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //get user information

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
      const response = await axios.post("http://localhost:4000/payment", {
        stripeToken: stripeToken,
        offerId: offerId,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <input type="submit" />
    </form>
  );
};

export default CheckoutFrom;
