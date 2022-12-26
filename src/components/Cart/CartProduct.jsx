import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../../redux/Slice/ProductSlice";
const CartProduct = ({ imgSrc, price, amount, product }) => {
  const items = useSelector((state) => state.counter.cartItems);
  const dispatch = useDispatch();

  const cartActionAddToCart = (product) => {
    const filetItem = items.filter((item) => item._id === product._id);
    if (filetItem.length === 0) {
      dispatch(addToCart(product));
    } else {
      dispatch(increaseAmount(product));
    }
    console.log(filetItem);
  };
  const cartActionRemoveFromCart = (product) => {
    const filetItem = items.filter((item) => item._id === product._id);
    if (filetItem[0].amount === 1) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(decreaseAmount(product));
    }
    console.log(filetItem);
  };
  const cartRemoveAllTheAmount = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <hr />
      <div className="row mt-4 d-flex justify-content-center align-items-center ">
        <div className="col-3">
          <img
            src={imgSrc}
            alt="tree"
            style={{ width: "4rem", height: "5.5rem" }}
            className=" border figure-img img-fluid rounded"
          />
        </div>
        <div className="col-3">{price} лв.</div>
        <div className="col-3">
          <div className="d-flex flex-row">
            <span
              class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg   p-2  me-2"
              style={{ width: "3rem", height: "2.5rem" }}
              onClick={() => {
                cartActionAddToCart(product);
              }}
            >
              +
            </span>
            <span
              class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 fw-bold productBorder-BgTotal p-2  me-2 "
              style={{ width: "4.5rem", height: "2.5rem" }}
            >
              {amount}
            </span>
            <span
              class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold productBorder-Bg  p-2  "
              style={{ width: "3rem", height: "2.5rem" }}
              onClick={() => {
                cartActionRemoveFromCart(product);
              }}
            >
              -
            </span>
          </div>
        </div>
        <div className="col-2">{price * amount} лв.</div>
        <div className="col-1 " onClick={() => cartRemoveAllTheAmount(product)}>
          X
        </div>
      </div>
    </>
  );
};

export default CartProduct;
