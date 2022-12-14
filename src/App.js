import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
//Import : pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Publish from "./pages/Publish";

//Import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Payment from "./pages/Payment";
library.add(faMagnifyingGlass, faArrowUp, faArrowDown);

function App() {
  //State and variables
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  const [searchBar, setSearchBar] = useState("");
  const [switchButton, setSwichButton] = useState(false);
  const [priceRange, setPriceRange] = useState([10, 100]);

  //Function to handle token
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  }; //Function to handle userId
  const handleUserId = (userId) => {
    if (userId) {
      setUserId(userId);
      Cookies.set("userId", userId, { expires: 7 });
    } else {
      setUserId(null);
      Cookies.remove("userId");
    }
  };
  return (
    <div className="App">
      <Router>
        <Header
          token={token}
          handleToken={handleToken}
          searchBar={searchBar}
          setSearchBar={setSearchBar}
          switchButton={switchButton}
          setSwichButton={setSwichButton}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchBar={searchBar}
                switchButton={switchButton}
                priceRange={priceRange}
              />
            }
          ></Route>
          <Route path="/offer/:id" element={<Offer token={token} />}></Route>
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          ></Route>
          <Route
            path="/login"
            element={
              <Login handleToken={handleToken} handleUserId={handleUserId} />
            }
          ></Route>
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment userId={userId} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
