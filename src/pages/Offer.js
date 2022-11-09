import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  //Get ID from the route
  const { id } = useParams();
  console.log(id);
  //State to store the offer received
  const [data, setData] = useState();
  //State to notify when the data is received
  const [isLoading, setIsLoading] = useState(true);

  //UseEffect required to fecth the data when the component is mount
  useEffect(() => {
    const fecthData = async () => {
      //Request to get the data from the backend
      try {
        const response = await axios.get(
          `https://site--backend-vinted--nfqr62d7mh6n.code.run/offer/${id}`
        );
        //Store the data in the state data
        setData(response.data);
        //Change bool isLoading to notify data is received
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fecthData();
  }, []);
  console.log(data);

  return <div>Je suis la page Offer</div>;
};

export default Offer;
