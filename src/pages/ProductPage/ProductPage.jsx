import React from "react";
import TopNavbar from "../../components/ProductPage/Navbars/TopNavbar";
import SubCategoryButtons from "../../components/ProductPage/SubCategoryButtons/SubCategoryButtons";
import FilterDropDown from "../../components/ProductPage/FilterDropDown/FilterDropDown";
import ProductsAndFilter from "../../components/ProductPage/ProductsAndFitler/ProductsAndFilter";
import Footer from "../../components/Footer/Footer";
import ThirdNavbar from "../../components/Navbars/ThirdNavbar/ThirdNavbar";
const ProductPage = () => {
  return (
    <>
      <TopNavbar />
      <ThirdNavbar />
      <SubCategoryButtons />
      <FilterDropDown />
      <ProductsAndFilter />

      <Footer />
    </>
  );
};

export default ProductPage;
