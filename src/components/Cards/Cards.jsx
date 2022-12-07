import React from "react";

const Cards = () => {
  return (
    <>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-6">
            <img
              src="./sb-3822-m050-christmas-2698836-lights-v2.webp"
              alt="tree"
              style={{ width: "100%", height: "100%" }}
            />

            <div className="fw-bold fs-4 pt-1">
              Christmas trees, lights and decorations
            </div>
            <div className="pt-1">Selected lines.</div>
            <div className="pt-1">Shop now</div>
          </div>
          <div className="col-6">
            <img
              src="./sb-3922-m050-selected-toys-v2.webp"
              alt="tree"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="fw-bold fs-4 pt-1">
              Christmas trees, lights and decorations
            </div>
            <div className="pt-1">Selected lines.</div>
            <div className="pt-1">Shop now</div>
          </div>
        </div>
        <div className="container" style={{ height: "8rem" }}></div>
      </div>
    </>
  );
};

export default Cards;