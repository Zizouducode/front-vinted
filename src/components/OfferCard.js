import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  return (
    <div className="offer">
      <div className="offer-user-info">
        <span>photo</span>
        <span>{offer.owner.account.username}</span>
      </div>
      <div className="offer-image-container">
        <Link to={`/offer/${offer._id}`}>
          <img
            className="offer-image"
            src={offer.product_image.secure_url}
            alt="offer"
          />
        </Link>
      </div>
      <div className="offer-description-containter">
        <div>{offer.product_price} €</div>
        <div className="offer-details">{offer.product_details[1].size}</div>
        <div className="offer-details">{offer.product_details[0].brand}</div>
      </div>
    </div>
  );
};

export default OfferCard;
