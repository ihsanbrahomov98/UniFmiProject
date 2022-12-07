import React from "react";
import ThirdNavbar from "../../components/Navbars/ThirdNavbar/ThirdNavbar";
import TopNavbar from "../../components/ProductPage/Navbars/TopNavbar";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";

const CartPage = () => {
  return (
    <>
      <TopNavbar />
      <ThirdNavbar />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
