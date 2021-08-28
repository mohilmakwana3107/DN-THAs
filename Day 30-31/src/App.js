import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart"
import Products from "./components/Products";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Products />
        <Wishlist />
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;