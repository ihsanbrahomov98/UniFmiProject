import React from "react";

const CartRefreshAndDeleteButtons = () => {
  return (
    <>
      <hr />
      <div className="mt-4">
        {" "}
        <div className="d-flex flex-row justify-content-between">
          <span
            className="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg fs-6   p-2  me-2"
            style={{ width: "17rem", height: "3.5rem" }}
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
