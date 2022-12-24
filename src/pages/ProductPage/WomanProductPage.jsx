import React from "react";
import TopNavbar from "../../components/ProductPage/Navbars/TopNavbar";
import Footer from "../../components/Footer/Footer";
import ThirdNavbar from "../../components/Navbars/ThirdNavbar/ThirdNavbar";
import SecondNavbar from "../../components/Navbars/SecondNavbar/SecondNavbar";
import Products from "../../components/ProductPage/ProductsAndFitler/Products/Products";
import SubCategoryButtons from "./../../components/ProductPage/SubCategoryButtons/SubCategoryButtons";
import FilterDropDown from "./../../components/ProductPage/FilterDropDown/FilterDropDown";
import ProductsAndFilter from "./../../components/ProductPage/ProductsAndFitler/ProductsAndFilter";
const WomanProductPage = () => {
  return (
    <>
      <TopNavbar />

      <ThirdNavbar />
      <SubCategoryButtons />
      <FilterDropDown cat="woman" />
      <Products cat="woman" />
      <Footer />
    </>
  );
};

export default WomanProductPage;
