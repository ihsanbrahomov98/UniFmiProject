import React, { useState, useEffect } from "react";
import "./cartCheckout.css";

const CartCheckout = ({ products }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let value = 0;
      for (let index = 0; index < products.length; index++) {
        value += products[index].amount * products[index].price;
      }
      setTotal(value);
    };
    products && calculateTotal();
  }, [products]);

  return (
    <>
      <div className=" m-4">
        <div className="row ">
          <div className="col-8 ">Имате код за отстъпка? Въведете го тук.</div>
          <div className="col-4 d-flex justify-content-center border p-3 fs-5 fw-bold">
            Обща сума
          </div>
        </div>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4 border p-3">
            <div className="d-flex justify-content-between p-3 ">
              <div className="">С Отстъпка</div>
              <div className="">
                {total}
                лв.
              </div>
            </div>
            <div className="d-flex justify-content-between  p-3  ">
              <div className="">Общо</div>
              <div className="">
                {total}
                лв.
              </div>
            </div>
            <div className="d-flex justify-content-center  ">
              <span
                class="mt-1 d-flex f-row justify-content-center align-items-center  fw-bold cartCheckOutButtonBg p-2 mt-2  "
                style={{ width: "90%", height: "3.1rem" }}
              >
                ПРИКЛЮЧВАНЕ НА ПОРЪЧКАТА
              </span>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCheckout;
