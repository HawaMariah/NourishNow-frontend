import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/faqs" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
