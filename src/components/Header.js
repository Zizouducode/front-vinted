import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  //Get the cookie from the nav
  const userCookie = Cookies.get("token");

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
          {!userCookie ? (
            <>
              <Link to="/signup">
                <button className="header-button white-button">
                  S'inscrire
                </button>
              </Link>
              <Link to="/login">
                <button className="header-button white-button">
                  Se Connecter
                </button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <button className="header-button red-button">
                Se déconnecter
              </button>
            </Link>
          )}
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
