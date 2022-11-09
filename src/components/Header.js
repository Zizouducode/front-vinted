import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <div>
          <input className="search-bar" type="text" />
        </div>
        <div className="header-button-container">
          <button className="header-button white-button">S'inscrire</button>
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
