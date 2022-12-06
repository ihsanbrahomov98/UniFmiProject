import React from "react";
import "./footerHeader.css";

const FooterBody = () => {
  return (
    <>
      <div className=" footerHeaderBg d-flex flex-row">
        <div className=" border container col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="">
            <div className="fw-bold d-flex flex-column justify-content-center align-items-center mt-4">
              Returning an item
            </div>
            <div className="fw-normal mt-2 d-flex flex-column justify-content-center align-items-center">
              We've extended our returns policy for Christmas.
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
              Learn more here
            </div>
          </div>
        </div>
        <div className="border container col-6 d-flex  flex-column justify-content-center align-items-center">
          <div className="">
            <div className="">
              <div className="fw-bold d-flex flex-row justify-content-center align-items-center mt-4 mb-1">
                Payment methods:
              </div>

              <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                  src="./1.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./2.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./3.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./4.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./5.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center mb-4">
                <img
                  src="./6.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./7.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./8.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./9.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
                <img
                  src="./10.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "1.5rem", width: "2rem" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="border container col-6 d-flex  flex-column justify-content-center align-items-center"></div>
        </div>
      </div>
    </>
  );
};

export default FooterBody;
