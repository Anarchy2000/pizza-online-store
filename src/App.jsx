import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Products from "./Pages/products";
import CartPage from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { loginUser, registerUser, logoutUser } from "./Store/userSlice";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  //component to check that the login data that was given on the login page matches that in the register
  const handleLogin = (loginData) => {
    try {
      dispatch(loginUser(loginData));
      navigate("/menu");
    } catch (error) {
      alert(error.message);
    }
  };

  //sets the data provided from the register page into the empty array of users
  const handleRegister = (registerData) => {
    dispatch(registerUser(registerData));
    navigate("/login");
  };

  //logs out the user, takes user back to the landing page
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="App">
      {/* Prop for the welcome once the user registers and logins  */}
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path="/menu"
          element={
            // passing the props from the products page to be used in the cart
            <Products />
          }
        />
        {/* checks to see if the user has logged in or not, if they haven't take them to the login page  */}
        <Route
          path="/cart"
          element={user ? <CartPage /> : <Navigate to="/login" />}
        />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="register"
          element={<Register onRegister={handleRegister} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
