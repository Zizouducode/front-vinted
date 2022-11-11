import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import PriceRange from "./PriceRange";

const Header = ({
  handleToken,
  searchBar,
  setSearchBar,
  switchButton,
  setSwichButton,
  priceRange,
  setPriceRange,
}) => {
  //State and variables
  const navigate = useNavigate();

  //Get the cookie from the nav
  const userCookie = Cookies.get("token");

  //Functions
  const handleLogout = (event) => {
    event.preventDefault();
    handleToken(null);
    navigate("/");
  };

  const handleSearchBarChange = (event) => {
    setSearchBar(event.target.value);
  };
  return (
    <div className="header-container">
      <div className="header">
        <div></div>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div>
          <input
            className="search-bar"
            type="text"
            onChange={(event) => {
              handleSearchBarChange(event);
            }}
            value={searchBar}
          />
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
              <button
                className="header-button red-button"
                onClick={(event) => {
                  handleLogout(event);
                }}
              >
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
      <div className="container filters-container">
        <div>
          <SwitchButton
            switchButton={switchButton}
            setSwichButton={setSwichButton}
          />
        </div>
        <div className="price-range">
          <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
