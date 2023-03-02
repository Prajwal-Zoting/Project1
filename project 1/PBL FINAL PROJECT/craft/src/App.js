
import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./checkout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Payment from "./Payment";
import Login from "./Login"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  'pk_test_51LKKPMSEKiY4c0hBdP0WBZhSlFo7Jx1ofbNE6cQWEaGneiYIQcxZH6MI7xPfdpGTefoHEJq2T3uDPzdwXL2yIVld00glRER5kC');
function App() {
  return (
    // BEM

    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/" element={[<Home />]}></Route>

          <Route path="/Payment" element = {[<Payment/>]}>
            
          </Route>

          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
