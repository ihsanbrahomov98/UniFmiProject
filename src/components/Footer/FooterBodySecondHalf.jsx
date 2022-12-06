import React from "react";
import "./footerHeader.css";

const FooterBodySecondHalf = () => {
  return (
    <>
      <div className=" footerHeaderBg d-flex flex-row">
        <div className=" border container col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="">
            <div className="fw-bold d-flex flex-column justify-content-center align-items-center mt-4">
              Follow us
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
                Download our app
              </div>

              <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                  src="./11.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "2.5rem", width: "7rem" }}
                ></img>
                <img
                  src="./12.webp"
                  alt="logo"
                  className="figure-img img-fluid rounded m-2"
                  style={{ height: "2.5rem", width: "7rem" }}
                ></img>
              </div>
            </div>
          </div>
          <div
            className=" container d-flex  flex-column justify-content-center align-items-center "
            style={{ height: "50px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default FooterBodySecondHalf;
