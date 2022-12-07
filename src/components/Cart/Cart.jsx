import React from "react";
import CartProduct from "./CartProduct";
import CartRefreshAndDeleteButtons from "./CartRefreshAndDeleteButtons";
import CartCheckout from "./CartCheckout";

const Cart = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center fw-light p-5  fs-2">
        Количка
      </div>
      <div className="m-4">
        <div className="row">
          <div className="col-3">ПРОДУКТ</div>
          <div className="col-3">ЦЕНА</div>
          <div className="col-3">ПРОДУКТ3</div>
          <div className="col-2">ОБЩО</div>
          <div className="col-1"></div>
        </div>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartRefreshAndDeleteButtons />
        <CartCheckout />
      </div>
    </>
  );
};

export default Cart;
