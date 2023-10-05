import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

// import AboutUs from "./components/AboutUs";
import Donations from './components/Donations'
import DonateFundsForm from './components/DonateFundsForm'
import ItemForm from './components/ItemForm'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/donate" element={<Donations />} />
          <Route exact path="/donatefundsform" element={<DonateFundsForm />} />
          <Route exact path="/itemsform" element={<ItemForm />} />
          {/* <Route exact path="/events" element={<Events />} />
          <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/faqs" element={<FAQ />} />
        </Routes>
        {/* <AboutUs/> */}
     
      {/* <ItemForm/> */}
      
      </Router>
    </div>
    </>
  );
}

export default App;