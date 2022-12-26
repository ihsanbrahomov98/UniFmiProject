import React, { useEffect, useState } from "react";
import ModalSingleProduct from "./Modal/Modal";
import "./singleProduct.css";
import { Truck } from "react-bootstrap-icons";
import { HandThumbsUp } from "react-bootstrap-icons";
import { TelephoneInbound } from "react-bootstrap-icons";
import AccordionItem from "./AccordionItem/AccordionItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../../redux/Slice/ProductSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(0);
  const items = useSelector((state) => state.counter.cartItems);
  let { id } = useParams();
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5550/back/mock/api/findone/${id}`
      );

      setProduct(data);
      console.log(data);
    };
    fetchproducts();
  }, []);
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
  return (
    <>
      <div className="container d-flex flex-row">
        <div className="col-6">
          {" "}
          <div
            className="container m-5"
            style={{ height: "45rem", width: "35rem" }}
          >
            <div className="container m-5">
              <div>
                <img
                  src="https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                  alt="tree"
                  style={{ width: "35rem", height: "45rem" }}
                  className=" border figure-img img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {" "}
          <div
            className="container m-5"
            style={{ height: "45rem", width: "35rem" }}
          >
            <div className="container m-5">
              <div className="container mt-4">
                <div className="m-2">
                  Начало / Облекла / Връхни облекла / Якета / ЯКЕ CASUAL NAVY
                </div>
                <div className="m-2 fs-2 fw-bold">{product.name}</div>
                <span className="m-2 fs-5 productNameColor  productPriceLine">
                  {product.price * 1.2} ,00 лв.
                </span>
                <span className="fs-5 productPrice ms-2">
                  {product.price} ,00 лв.
                </span>

                <div className="m-2">{product.description}</div>
                <div className="m-2">{product.category}</div>
                <div className="m-2">
                  <div className="d-flex flex-row">
                    <span
                      class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg   p-2 mt-4 me-2"
                      style={{ width: "4rem", height: "3.2rem" }}
                      onClick={() => {
                        cartActionAddToCart(product);
                        setCounter((prev) => prev + 1);
                      }}
                    >
                      +
                    </span>
                    <span
                      class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 fw-bold productBorder-BgTotal p-2 mt-4 me-2 "
                      style={{ width: "5.5rem", height: "3.2rem" }}
                    >
                      {counter}
                    </span>
                    <span
                      class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold productBorder-Bg  p-2 mt-4 "
                      style={{ width: "4rem", height: "3.2rem" }}
                      onClick={() => {
                        cartActionRemoveFromCart(product);
                        setCounter((prev) => prev - 1);
                      }}
                    >
                      -
                    </span>
                  </div>
                  <div class="modal-dialog modal-dialog-centered"></div>
                  <ModalSingleProduct />
                </div>
                <hr style={{ color: "black" }} />
              </div>
              <div className="d-flex f-row justify-content-around align-items-center">
                <div className="text-center">
                  <Truck style={{ fontSize: "4rem" }} />
                  <div className="mt-1">Бърза Доставка</div>
                  <div className="">до 2 дни</div>
                </div>
                <div className="text-center">
                  <HandThumbsUp style={{ fontSize: "4rem" }} />
                  <div className="mt-1">Бърза Доставка</div>
                  <div className="">до 2 дни</div>
                </div>
                <div className="text-center">
                  <TelephoneInbound style={{ fontSize: "4rem" }} />
                  <div className="mt-1">Бърза Доставка</div>
                  <div className="">до 2 дни</div>
                </div>
              </div>
              <AccordionItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
