import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import CartRefreshAndDeleteButtons from "./CartRefreshAndDeleteButtons";
import CartCheckout from "./CartCheckout";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.counter.cartItems);
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(items);
  }, [items]);
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
        {items &&
          items.map((item) => {
            return <CartProduct imgSrc={item.img} price={item.price} />;
          })}
        <CartRefreshAndDeleteButtons />
        <CartCheckout />
      </div>
    </>
  );
};

export default Cart;
