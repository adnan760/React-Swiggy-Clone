import {BrowserRouter, Routes, Route} from "react-router-dom"

// components
import  Header  from './components/header/Header.js';
import Home from './components/home/Home.js';
import Cart from "./components/cart/Cart.js";


function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
