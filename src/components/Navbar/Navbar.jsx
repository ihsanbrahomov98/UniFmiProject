import React from "react";
import CenterNavbarElement from "./CenterNavbarElement";
import LeftNavbarElements from "./LeftNavbarElements";
import RightNavbarElement from "./RightNavbarElement";

const Navbar = () => {
  return (
    <>
      <div
        className=" bg-danger text-white d-flex  w-100 "
        style={{ height: "4rem" }}
      >
        <div className="container  d-flex ">
          <LeftNavbarElements></LeftNavbarElements>
          <CenterNavbarElement></CenterNavbarElement>
          <RightNavbarElement></RightNavbarElement>
        </div>
      </div>
    </>
  );
};

export default Navbar;
