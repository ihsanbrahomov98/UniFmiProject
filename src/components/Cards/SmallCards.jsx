import React from "react";

const SmallCards = () => {
  return (
    <>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-4">
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
          <div className="col-4">
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
          <div className="col-4">
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
        <div className="container" style={{ height: "10rem" }}></div>
      </div>
    </>
  );
};

export default SmallCards;
