import React from "react";

const Cards = () => {
  return (
    <>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-6">
            <img
              src="./b1.webp"
              alt="tree"
              style={{ width: "100%", height: "100%" }}
              className=" border figure-img img-fluid rounded"
            />

            <div className="fw-bold fs-4 pt-1">
              Избрани продкути, Лимитирана серия
            </div>
            <div className="pt-1">Избери своя продукт</div>
            <div className="pt-1">Пазарувай сега</div>
          </div>
          <div className="col-6">
            <img
              src="./b2.webp"
              alt="tree"
              style={{ width: "100%", height: "100%" }}
              className=" border figure-img img-fluid rounded"
            />
            <div className="fw-bold fs-4 pt-1">
              Избрани продкути, Лимитирана серия
            </div>
            <div className="pt-1">Избери своя продукт</div>
            <div className="pt-1">Пазарувай сега</div>
          </div>
        </div>
        <div className="container" style={{ height: "8rem" }}></div>
      </div>
    </>
  );
};

export default Cards;
