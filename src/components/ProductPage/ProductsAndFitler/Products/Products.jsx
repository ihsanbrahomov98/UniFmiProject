import React from "react";
import Product from "./Product";
const Products = () => {
  return (
    <>
      <div className="d-flex f-row justify-content-between align-items-center ">
        <span>
          <Product />
        </span>
        <span>
          <Product />
        </span>
        <span>
          <Product />
        </span>
        <span>
          <Product />
        </span>
      </div>
    </>
  );
};

export default Products;
