import React from "react";
import { useState } from "react";
import "./firstNavbar.css";
import { Telephone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Geo } from "react-bootstrap-icons";

const FirstNavbar = () => {
  const [selected, setSelected] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const switchSelectedSite = (chosen) => {
    setSelected((prevState) => ({
      ...prevState,
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      [chosen]: true,
    }));
    console.log(chosen);
  };
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="d-flex f-row">
          <div
            className="customBorder p-3 "
            style={{
              borderTop: selected.first ? "3px solid #ed1c24 " : "none",
              fontWeight: selected.first ? "bold " : "400",
            }}
            onClick={() => switchSelectedSite("first")}
          >
            Top Shop
          </div>
          <div
            onClick={() => switchSelectedSite("second")}
            className="customBorder p-3 "
            style={{
              borderTop: selected.second ? "3px solid #ed1c24 " : "none",
              fontWeight: selected.second ? "bold " : "400",
            }}
          >
            Dormeo
          </div>
          <div
            onClick={() => switchSelectedSite("third")}
            className="customBorder p-3 "
            style={{
              borderTop: selected.third ? "3px solid #ed1c24 " : "none",
              fontWeight: selected.third ? "bold " : "400",
            }}
          >
            <i class="bi bi-arrow-up-square-fill"></i>
            Delimano
          </div>
          <div
            onClick={() => switchSelectedSite("fourth")}
            className="customBorder p-3 "
            style={{
              borderTop: selected.fourth ? "3px solid #ed1c24 " : "none",
              fontWeight: selected.fourth ? "bold " : "400",
            }}
          >
            Wallmax
          </div>
          <div
            onClick={() => switchSelectedSite("fifth")}
            className="customBorder p-3 "
            style={{
              borderTop: selected.fifth ? "3px solid #ed1c24 " : "none",
              fontWeight: selected.fifth ? "bold " : "400",
            }}
          >
            DXC Technology
          </div>
        </div>
        <div className="d-flex f-row">
          <div className="p-3 customGray">
            <Telephone /> 02/80 843 55
          </div>
          <div className="p-3 customGray">
            <Envelope /> topshop@topshop.bg
          </div>
          <div className="p-3 customGray">
            <Geo /> НАШИ МАГАЗИНИ
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstNavbar;
