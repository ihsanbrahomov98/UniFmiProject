import React from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import "./thirdNavbar.css";
const ThirdNavbar = () => {
  return (
    <>
      <div className="d-flex f-row justify-content-between align-items-center bg-customFontAndSize p-3 ">
        <div className="container d-flex f-row justify-content-between align-items-center bg-customFontAndSize p-3">
          <div className="">
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              {" "}
              <span className="ps-3 pe-3 customFontAndSize">
                Начална Страница
              </span>
            </Link>
          </div>
          <div className="">
            <div className="d-flex flex-row justify-content-between align-items-between">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/all"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">
                  Всички Продукти
                </span>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/man"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">Мъже</span>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/woman"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">Жени</span>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/sport"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">Спортни</span>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/child"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">Детски</span>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/christmas"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">Коледни</span>
              </Link>
            </div>
          </div>

          <div className="customFontAndSize">
            <SecondNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdNavbar;
