import React from "react";
import "./whiteLine.css";
const WhiteLine = () => {
  return (
    <>
      <div className="container d-flex f-row justify-content-start align-items-center fw-bold fs-5 mt-3 whiteLineBgColor  whiteLineTextColor ">
        <div className="  container col-6 d-flex flex-column justify-content-start align-items-start ">
          <div className="mt-1">
            Presents now, pay later with the Argos Card
          </div>
          <div className="mt-1">Representative 34.9% APR variable.</div>
          <div className="fs-6 fw-light mt-1">
            Credit subject to status. T&Cs apply.
          </div>
          <span
            class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 whiteLineBorder mt-2 "
            style={{ width: "7rem", height: "3rem" }}
          >
            Learn more
          </span>
        </div>
        <div className="  container col-6 d-flex flex-column justify-content-center align-items-center  ">
          <img
            className="figure-img img-fluid rounded"
            src="Argos-Card.webp"
            alt="Argos-Card"
            style={{ height: "50%", width: "50%" }}
          />
        </div>
      </div>
    </>
  );
};

export default WhiteLine;
