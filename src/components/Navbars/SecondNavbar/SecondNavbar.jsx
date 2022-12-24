import React, { useState, useEffect, useRef } from "react";
import BodyOfDropDown from "./NavbarDropDownMenu/BodyDropDown/BodyDropDown";
import "./secondNavbar.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Search } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Cart } from "react-bootstrap-icons";
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";
import ButtonDropDown from "./NavbarDropDownMenu/ButtonDropDown/ButtonDropDown";
import ModalSearch from "./ModalSearch.jsx/ModalSearch";

const SecondNavbar = () => {
  const [toggledDropDownOne, setToggledDropDownOne] = useState(false);
  const [toggledDropDownTwo, setToggledDropDownTwo] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
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
        <div className="col-4  d-flex f-row justify-content-end align-items-center">
          {/* <div className="form-form-control form-control-lg">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              style={{ width: "450px" }}
            />
          </div> */}
          <Search onClick={() => setModalShow(true)}></Search>

          <ModalSearch show={modalShow} onHide={() => setModalShow(false)} />
        </div>

        <div className="col-4 d-flex justify-content-center ">
          <div
            ref={buttonRef}
            className=" position-relative d-flex  justify-content-center align-items-center"
            onMouseEnter={() => {
              setToggledDropDownOne(true);
              setOpen(true);
            }}
            onMouseLeave={() => {
              setToggledDropDownOne(false);
            }}
          >
            <Person className=" customFont" />

            <CaretDown />
          </div>
          <div className="ButtonDropDown_container">
            <div className="ButtonDropDown_Arrow"></div>
            <BodyOfDropDown open={open} />{" "}
          </div>
          <div className="d-flex  p-2 justify-content-center align-items-center">
            <Cart className=" customFont" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondNavbar;
