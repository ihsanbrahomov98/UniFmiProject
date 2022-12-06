import React from "react";

function ControlledCarousel() {
  return (
    <div
      id="carouselExampleInterval"
      className=" carousel slide carousel-dark pt-2 pb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="./sb-3922-M001.webp"
            className="d-block w-100 img-fluid img-thumbnail"
            style={{ height: "30rem" }}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="./sb-3922-M001.webp"
            className="d-block w-100 img-fluid img-thumbnail"
            style={{ height: "30rem" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./sb-3922-M001.webp"
            className="d-block w-100 img-fluid img-thumbnail"
            style={{ height: "30rem" }}
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
