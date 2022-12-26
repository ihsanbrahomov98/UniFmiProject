import React from "react";

const CartProduct = ({ imgSrc, price }) => {
  return (
    <>
      <hr />
      <div className="row mt-4">
        <div className="col-3">
          <img
            src={imgSrc}
            alt="tree"
            style={{ width: "4rem", height: "5.5rem" }}
            className=" border figure-img img-fluid rounded"
          />
        </div>
        <div className="col-3">{price} lv</div>
        <div className="col-3">
          <div className="d-flex flex-row">
            <span
              class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg   p-2  me-2"
              style={{ width: "3rem", height: "2.5rem" }}
            >
              +
            </span>
            <span
              class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 fw-bold productBorder-BgTotal p-2  me-2 "
              style={{ width: "4.5rem", height: "2.5rem" }}
            >
              1
            </span>
            <span
              class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold productBorder-Bg  p-2  "
              style={{ width: "3rem", height: "2.5rem" }}
            >
              -
            </span>
          </div>
        </div>
        <div className="col-2">120 lv</div>
        <div className="col-1 ">X</div>
      </div>
    </>
  );
};

export default CartProduct;
