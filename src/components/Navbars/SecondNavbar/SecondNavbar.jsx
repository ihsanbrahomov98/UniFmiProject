import React, { useState, useEffect, useRef } from "react";
import BodyOfDropDown from "./NavbarDropDownMenu/BodyDropDown/BodyDropDown";
import "./secondNavbar.css";
import { Star } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Cart } from "react-bootstrap-icons";
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";
import ButtonDropDown from "./NavbarDropDownMenu/ButtonDropDown/ButtonDropDown";

const SecondNavbar = () => {
  const [toggledDropDownOne, setToggledDropDownOne] = useState(false);
  const [toggledDropDownTwo, setToggledDropDownTwo] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    console.log("render");
    document.body.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [toggledDropDownOne, toggledDropDownTwo]);
  return (
    <>
      <div className="container d-flex f-row justify-content-between ">
        <div class="col-3 d-flex justify-content-start">
          <img
            src="https://www.topshop.bg/static/images/logo.svg"
            alt="logo"
            className="logo "
          ></img>
        </div>
        <div className="col-4  d-flex f-row justify-content-end align-items-center">
          <div className="form-form-control form-control-lg">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              style={{ width: "450px" }}
            />
          </div>
          <button
            className=" d-flex f-row p-2  align-items-center btn border "
            id="search-button"
            type="button"
          >
            <Search />
          </button>
        </div>

        <div className="col-4 d-flex justify-content-center ">
          <div className="d-flex border-start  p-3 justify-content-center align-items-center">
            <Star className=" customFont" />

            <div className=" p-2 customFont">Favourites</div>
          </div>

          <div
            ref={buttonRef}
            className=" position-relative d-flex border-start  p-3 justify-content-center align-items-center"
            onMouseEnter={() => {
              setToggledDropDownOne(true);
              setOpen(true);
            }}
            onMouseLeave={() => {
              setToggledDropDownOne(false);
            }}
          >
            <Person className=" customFont" />

            <div className="p-2  customFont">Profile</div>
            <CaretDown />
          </div>
          <div className="ButtonDropDown_container">
            <div className="ButtonDropDown_Arrow"></div>
            <BodyOfDropDown open={open} />{" "}
          </div>
          <div className="d-flex border-start p-3 f-row justify-content-center align-items-center">
            <Cart className="customFont" />
            <div className=" customFont blackCircle ms-1 ">22</div>

            <div className=" p-2  customFont">120лв.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondNavbar;
