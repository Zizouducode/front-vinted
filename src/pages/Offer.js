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
  }, [id]);
  console.log(data);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="grey-background">
      <div className="offer-page-container">
        <div className="offer-page-img-container">
          <img
            className="offer-page-img"
            src={data.offer.product_image.secure_url}
            alt="offer"
          />
        </div>
        <div className="offer-page-info">
          <p className="offer-page-details-price">
            {data.offer.product_price} €
          </p>
          <div className="offer-page-details">
            <div className="offer-page-details-keys">
              <p>MARQUE</p>
              <p>TAILLE</p>
              <p>ÉTAT</p>
              <p>COULEUR</p>
              <p>EMPLACEMENT</p>
            </div>
            <div className="offer-page-details-values">
              <p>{data.offer.product_details[0].brand}</p>
              <p>{data.offer.product_details[1].size}</p>
              <p>{data.offer.product_details[2].condition}</p>
              <p>{data.offer.product_details[3].color}</p>
              <p>{data.offer.product_details[4].city}</p>
            </div>
          </div>
          <div className="offer-page-details-main">
            <p className="offer-page-details-title">
              {data.offer.product_name}
            </p>
            <p className="offer-page-details-description">
              {data.offer.product_description}
            </p>
            <div className="offer-page-details-user-info">
              <p className="offer-page-details-user-picture">T</p>
              <p className="offer-page-details-user-username">
                {data.offer.owner.account.username}
              </p>
            </div>
          </div>

          <button className="offer-page-buy-button">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
