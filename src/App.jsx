import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Products from "./Pages/products";
import CartPage from "./Pages/Cart";

export default function App() {
  //useStare array to save any order selected
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path="/menu"
          element={
            // passing the props from the products page to be used in the cart
            <Products setCartItems={setCartItems} cartItems={cartItems} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
