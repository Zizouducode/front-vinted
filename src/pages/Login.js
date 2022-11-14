import axios from "axios";
// import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  //State and variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {};
  const navigate = useNavigate();
  //Functions

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      user.email = email;
      user.password = password;
      console.log(user);
      const logUser = async () => {
        try {
          const response = await axios.post(
            `https://site--backend-vinted--nfqr62d7mh6n.code.run/user/login`,
            user
          );
          console.log(response);
          if (response.data.token) {
            handleToken(response.data.token);
            navigate("/publish");
          }
        } catch (error) {
          console.log(error.message);
          if (error.response.status === 401) alert("Invalid credentials");
        }
      };
      logUser();
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form
          className="form"
          onSubmit={(event) => {
            handleFormSubmit(event);
          }}
        >
          <h1>Se connecter</h1>
          <input
            type="email"
            placeholder="Adresse email"
            onChange={(event) => {
              handleEmailChange(event);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              handlePasswordChange(event);
            }}
            value={password}
          />
          <button type="submit" className="subscribe-button green-button">
            Se connecter
          </button>
          <Link to="/signup">
            <p className="form-last-p">Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
