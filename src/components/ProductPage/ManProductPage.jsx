import React from "react";
import TopNavbar from "./Navbars/TopNavbar";
import SubCategoryButtons from "./SubCategoryButtons/SubCategoryButtons";
import FilterDropDown from "./FilterDropDown/FilterDropDown";
import ProductsAndFilter from "./ProductsAndFitler/ProductsAndFilter";
import Footer from "../Footer/Footer";
import ThirdNavbar from "../Navbars/ThirdNavbar/ThirdNavbar";
import SecondNavbar from "../Navbars/SecondNavbar/SecondNavbar";
import Products from "./ProductsAndFitler/Products/Products";
const ManProductPage = () => {
  return (
    <>
      <TopNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <SubCategoryButtons />
      <FilterDropDown cat="man" />
      <Products cat="man" />
      <Footer />
    </>
  );
};

export default ManProductPage;
