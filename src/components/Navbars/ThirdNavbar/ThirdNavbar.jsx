import React from "react";
import { Link } from "react-router-dom";
import "./thirdNavbar.css";
const ThirdNavbar = () => {
  return (
    <>
      <div className="d-flex f-row justify-content-between align-items-center bg-customFontAndSize p-3 ">
        <div className="container d-flex f-row justify-content-between align-items-center bg-customFontAndSize p-3">
          <div className="">Logo</div>
          <div className="">
            <div className="d-flex flex-row justify-content-between align-items-between">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/product"}
              >
                {" "}
                <span className="ps-3 pe-3 customFontAndSize">Мъжки</span>
              </Link>

              <span className="ps-3 pe-3 customFontAndSize">Мъжки</span>
              <span className="ps-3 pe-3 customFontAndSize">Мъжки</span>
              <span className="ps-3 pe-3 customFontAndSize">Мъжки</span>
              <span className="ps-3 pe-3 customFontAndSize">Мъжки</span>
              <span className="ps-3 pe-3 customFontAndSize">Мъжки</span>
            </div>
          </div>

          <div className="customFontAndSize">Кухня</div>
        </div>
      </div>
    </>
  );
};

export default ThirdNavbar;
