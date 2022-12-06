import React from "react";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
      <div className="container  " style={{ height: "22rem", width: "17rem" }}>
        <Link to={"/product/1"}>
          <div>
            <img
              src="./221025-102_1web.jpg"
              alt="tree"
              style={{ width: "100%", height: "100%" }}
              className=" border figure-img img-fluid rounded"
            />
            <div>Вълнен бобър</div>
            <div className="fs-5 mt-1">207 лв</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
