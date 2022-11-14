import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import PriceRange from "./PriceRange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  //Get the current path to show filters only on Home Page
  const currentLocation = window.location.pathname;

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
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <div className="search-bar-container">
            <FontAwesomeIcon
              className="magnifying-glass-icon"
              icon="magnifying-glass"
            />
            <input
              className="search-bar"
              type="text"
              onChange={(event) => {
                handleSearchBarChange(event);
              }}
              value={searchBar}
              placeholder="Recherche des articles"
            />
          </div>

          {currentLocation === "/" && (
            <div className="filters-container">
              <span>Trier par prix : </span>
              <SwitchButton
                switchButton={switchButton}
                setSwichButton={setSwichButton}
              />
              <PriceRange
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          )}
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
          <Link to="/publish">
            <button className="header-button green-button">
              Vends tes articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
