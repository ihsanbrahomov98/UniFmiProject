import React from "react";
import { Link } from "react-router-dom";
const Product = ({ imgSrc, altInfo, linkUrl, nameInfo, price }) => {
  return (
    <>
      <div className="containe " style={{ height: "22rem", width: "17rem" }}>
        <Link to={linkUrl}>
          <div>
            <img
              src={imgSrc}
              alt={altInfo}
              style={{ width: "100%", height: "100%" }}
              className=" border figure-img img-fluid rounded"
            />
            <div>{nameInfo}</div>
            <div className="fs-5 mt-1">{price} лв</div>
          </div>
        </Link>
      </div>
      <div className="" style={{ height: "10rem" }}></div>
    </>
  );
};

export default Product;
