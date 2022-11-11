import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import : pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  //State and variables
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [searchBar, setSearchBar] = useState("");

  //Function to handle token
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
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
        />
        <Routes>
          <Route path="/" element={<Home searchBar={searchBar} />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          ></Route>
          <Route
            path="/login"
            element={<Login handleToken={handleToken} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
