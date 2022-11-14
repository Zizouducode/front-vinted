import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Publish = ({ token }) => {
  // console.log(token);
  //State and variables
  const [picture, setPicture] = useState();
  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  //change the button format for the upload of the picture
  const hiddenFileInput = React.useRef(null);
  //Functions
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
    // handleFile(picture);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      picture &&
      title &&
      description &&
      brand &&
      size &&
      color &&
      condition &&
      city &&
      price
    ) {
      try {
        //Create a new instance of FormData constructor
        const formData = new FormData();
        //Add the keys to the FormData
        formData.append("picture", picture);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("price", price);
        // console.log(formData);
        //Send the request to the backend
        const response = await axios.post(
          "https://site--backend-vinted--nfqr62d7mh6n.code.run/offer/publish",
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`,
              //Precise we send a FormData
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    } else alert("Merci de remplir tous les champs");
  };

  //If user had a token return form otherwise login page
  return token ? (
    <div className="publish-body-background-color">
      <div className="publish-form container">
        <h2>Vends ton article</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="publish-form-picture-upload">
            <div className="publish-form-picture-upload-dashed">
              <button
                className="publish-form-add-picture"
                type="file"
                onClick={handleClick}
              >
                + Ajoute une photo
              </button>
              <input
                type="file"
                style={{ display: "none" }}
                ref={hiddenFileInput}
                onChange={handlePictureChange}
              />
            </div>
          </div>
          <div>
            <p>Titre</p>
            <input
              type="text"
              placeholder="ex: Chemise Sezane Verte"
              onChange={handleTitleChange}
              value={title}
            />
            <p>Decris ton article</p>
            <input
              type="text"
              placeholder="porté quelquefois, taille correctement"
              onChange={handleDescriptionChange}
              value={description}
            />
          </div>
          <div>
            <p>Marque</p>
            <input
              type="text"
              placeholder="ex : Nike"
              onChange={handleBrandChange}
              value={brand}
            />
            <p>Taille</p>
            <input
              type="text"
              placeholder="L / 40 / 34"
              onChange={handleSizeChange}
              value={size}
            />
            <p>Couleur</p>
            <input
              type="text"
              placeholder="ex: Noir"
              onChange={handleColorChange}
              value={color}
            />
            <p>Etat</p>
            <input
              type="text"
              placeholder="ex : Neuf sans étiquette"
              onChange={handleConditionChange}
              value={condition}
            />
            <p>Lieu</p>
            <input
              type="text"
              placeholder="Brive-La-Gaillarde"
              onChange={handleCityChange}
              value={city}
            />
          </div>
          <div>
            <p>Prix</p>
            <input
              type="number"
              placeholder="0.00 €"
              onChange={handlePriceChange}
              value={price}
            />
            <input type="checkbox" />
            <span>Je suis intéressé(e) par les échanges</span>
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
