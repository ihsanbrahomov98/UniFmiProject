import React from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import TopNavbar from "../../components/ProductPage/Navbars/TopNavbar";
import ThirdNavbar from "../../components/Navbars/ThirdNavbar/ThirdNavbar";
import Footer from "../../components/Footer/Footer";

const SingleProductPage = () => {
  return (
    <>
      <TopNavbar />
      <ThirdNavbar />
      <SingleProduct />
      <Footer />
    </>
  );
};

export default SingleProductPage;
