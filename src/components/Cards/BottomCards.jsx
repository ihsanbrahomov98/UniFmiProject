import React from "react";

const BottomCards = () => {
  return (
    <>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-6">
            <img
              src="./sb-3322-m050-warm.webp"
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
              src="./sb-3622-m050-2654375-ninja-airfryer.webp"
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

export default BottomCards;
