import React from "react";

function ControlledCarousel() {
  return (
    <div
      id="carouselExampleInterval"
      className=" carousel slide carousel-dark figure-img img-fluid rounded pb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="./b3.webp"
            className="d-block w-100 figure-img img-fluid rounded "
            style={{ height: "40rem" }}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="./c1.webp"
            className="d-block w-100 figure-img img-fluid rounded "
            style={{ height: "40rem" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./c3.webp"
            className="d-block w-100 figure-img img-fluid rounded "
            style={{ height: "40rem" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default ControlledCarousel;
