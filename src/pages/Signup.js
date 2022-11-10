import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ handleToken }) => {
  //State and variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const user = {};
  const navigate = useNavigate();

  //Functions
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCheckBoxChange = () => {
    if (checkBox) {
      setCheckBox(false);
    } else setCheckBox(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username && email && password && checkBox) {
      user.username = username;
      user.email = email;
      user.password = password;
      user.newsletter = checkBox;
      //   console.log(user);
      const registerUser = async () => {
        // console.log("je suis la");
        try {
          const response = await axios.post(
            `https://site--backend-vinted--nfqr62d7mh6n.code.run/user/signup`,
            user
          );
          console.log(response);
          if (response.data.token) {
            handleToken(response.data.token);
            navigate("/");
          }
        } catch (error) {
          console.log(error.response.status);
          if (error.response.status === 409) alert("This user alrady exists");
        }
      };
      registerUser();
    } else {
      alert("Merci de remplir tous les champs");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={(event) => handleFormSubmit(event)}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={(event) => handleUsernameChange(event)}
            value={username}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => handleEmailChange(event)}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de Passe"
            onChange={(event) => handlePasswordChange(event)}
            value={password}
          />
          <div className="newsletter">
            <input
              type="checkbox"
              onClick={handleCheckBoxChange}
              value={checkBox}
            />
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>

          <button type="submit">S'inscrire</button>
          <Link to="/login">
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
