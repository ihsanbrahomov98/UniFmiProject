import React from "react";
import ModalSingleProduct from "./Modal/Modal";
import "./singleProduct.css";
import { Truck } from "react-bootstrap-icons";
import { HandThumbsUp } from "react-bootstrap-icons";
import { TelephoneInbound } from "react-bootstrap-icons";
import AccordionItem from "./AccordionItem/AccordionItem";
const SingleProduct = () => {
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
                <div className="m-2 fs-2 fw-bold">ЯКЕ CASUAL NAVY 2</div>
                <div className="m-2 fs-4 fw-bold">170,00 лв.</div>
                <div className="m-2">text</div>
                <div className="m-2">text</div>
                <div className="m-2">
                  <div className="d-flex flex-row">
                    <span
                      class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold  productBorder-Bg   p-2 mt-4 me-2"
                      style={{ width: "4rem", height: "3.2rem" }}
                    >
                      +
                    </span>
                    <span
                      class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 fw-bold productBorder-BgTotal p-2 mt-4 me-2 "
                      style={{ width: "5.5rem", height: "3.2rem" }}
                    >
                      1
                    </span>
                    <span
                      class="mt-1 d-flex f-row justify-content-center align-items-center fs-5 fw-bold productBorder-Bg  p-2 mt-4 "
                      style={{ width: "4rem", height: "3.2rem" }}
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
