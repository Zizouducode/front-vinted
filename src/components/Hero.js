import dechire from "../assets/images/dechire.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="banner-container">
      <div className="hero-container">
        <div className="hero">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <Link to="/publish">
            <button className="green-button hero-button">
              Vends maintenant
            </button>
          </Link>

          <span>Découvrir comment ça marche</span>
        </div>
      </div>
      <img className="hero-form" src={dechire} alt="" />
    </div>
  );
};

export default Hero;
