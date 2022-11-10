import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <div>
          <input className="search-bar" type="text" />
        </div>
        <div className="header-button-container">
          <Link to="/signup">
            <button className="header-button white-button">S'inscrire</button>
          </Link>

          <button className="header-button white-button">Se Connecter</button>
        </div>
        <div>
          <button className="header-button green-button">
            Vends tes articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
