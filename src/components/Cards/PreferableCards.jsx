import React from "react";

const PreferableCards = () => {
  return (
    <>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-3">
            <img
              src="./1243505_R_SET.webp"
              alt="tree"
              style={{ width: "80%", height: "80%" }}
              className="figure-img img-fluid rounded"
            />
            <div className="pt-2 ps-4">Fifa 23</div>
            <div className="fw-bold fs-5 pt-1 ps-4">От 25 лв.</div>
          </div>
          <div className="col-3">
            <img
              src="./1243017_R_SET.webp"
              alt="tree"
              style={{ width: "80%", height: "80%" }}
              className="figure-img img-fluid rounded"
            />
            <div className="pt-2 ps-4">Pixel 7 Pro</div>
            <div className="fw-bold fs-5 pt-1 ps-4">От 700 лв.</div>
          </div>
          <div className="col-3">
            <img
              src="./1243000_R_SET.webp"
              alt="tree"
              style={{ width: "80%", height: "80%" }}
              className="figure-img img-fluid rounded"
            />
            <div className="pt-2 ps-4">Pixel 7</div>
            <div className="fw-bold fs-5 pt-1 ps-4">От 400 лв.</div>
          </div>
          <div className="col-3">
            <img
              src="./1242991_R_SET.webp"
              alt="tree"
              style={{ width: "80%", height: "80%" }}
              className="figure-img img-fluid rounded"
            />
            <div className="pt-2 ps-4">Pixel 6a</div>
            <div className="fw-bold fs-5 pt-1 ps-4">От 300 лв.</div>
          </div>
        </div>
        <div className="container" style={{ height: "3rem" }}></div>
      </div>
    </>
  );
};

export default PreferableCards;
