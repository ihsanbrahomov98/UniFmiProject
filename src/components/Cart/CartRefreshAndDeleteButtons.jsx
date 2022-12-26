import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/Slice/ProductSlice";

const CartRefreshAndDeleteButtons = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <>
      <hr />
      <div className="mt-4">
        {" "}
        <div className="d-flex flex-row justify-content-between">
          <span
            className="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg fs-6   p-2  me-2"
            style={{ width: "17rem", height: "3.5rem" }}
            onClick={() => dispatch(clearCart(products))}
          >
            Изчистване на количката
          </span>
          <span
            className="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg fs-6   p-2  me-2"
            style={{ width: "17rem", height: "3.5rem" }}
          >
            Обновяване на количката
          </span>
        </div>
      </div>
    </>
  );
};

export default CartRefreshAndDeleteButtons;
