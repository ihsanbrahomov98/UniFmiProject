import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Product = ({
  imgSrc,
  altInfo,
  linkUrl,
  nameInfo,
  price,
  heightRem,
  widthRem,
  gutterRem,
  color,
}) => {
  return (
    <>
      <div className="container" style={{ height: heightRem, width: widthRem }}>
        <Link style={{ textDecoration: "none" }} to={linkUrl}>
          <div>
            <img
              src={imgSrc}
              alt={altInfo}
              style={{ width: "100%", height: "100%" }}
              className=" border figure-img img-fluid rounded"
            />

            <span className="productNameColor">{nameInfo}</span>
            <span className="productNameColor ms-1 me-1">/</span>
            <span className="productNameColor">{color}</span>
            <div></div>

            <span className="fs-5 productNameColor  productPriceLine">
              {(price * 1.2).toFixed(2)} лв.
            </span>
            <span className="fs-5 productPrice ms-2">
              {(price * 1).toFixed(2)} лв.
            </span>
          </div>
        </Link>
      </div>

      <div className="" style={{ height: gutterRem }}></div>
    </>
  );
};

export default Product;
