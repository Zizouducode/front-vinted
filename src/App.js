import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import : pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
