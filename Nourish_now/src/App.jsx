import NavBar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import AboutUs from './components/About_Us'
import Donations from './components/Donations'
import DonateFundsForm from './components/DonateFundsForm'
import ItemForm from './components/ItemForm'


function App() {
 

  return (
    <>
   
      <div>
      <NavBar/>
      <Home/>
      <AboutUs />
      <Donations/>
      <DonateFundsForm/>
      <ItemForm/>
       </div>


    </>
  );
};

export default App
