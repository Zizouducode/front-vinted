import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  console.log(token);
  //State and variables

  // useEffect(() => {
  //   if (!token) {
  //   }
  // }, []);
  return token ? (
    <div className="container">
      <h2>Vends ton article</h2>
      <form>
        <div>
          <input type="file" />
        </div>
        <div>
          <p>Titre</p>
          <input type="text" placeholder="ex: Chemise Sezane Verte" />
          <p>Decris ton article</p>
          <input type="text" />
        </div>
        <div>
          <p>Marque</p>
          <input type="text" />
          <p>Taille</p>
          <input type="text" />
          <p>Couleur</p>
          <input type="text" />
          <p>Etat</p>
          <input type="text" />
          <p>Lieu</p>
          <input type="text" />
        </div>
        <div>
          <p>Prix</p>
          <input type="number" />
          <input type="checkbox" />
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Publish;
