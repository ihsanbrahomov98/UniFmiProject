import React from "react";

import Body from "./Body/Body";
import ThirdNavbar from "../Navbars/ThirdNavbar/ThirdNavbar";
import TopNavbar from "../ProductPage/Navbars/TopNavbar";

const Login = () => {
  return (
    <div className="position-relative">
      <TopNavbar />
      <ThirdNavbar />
      <img
        className=""
        src="https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg"
        alt="Snow"
        style={{ width: "100vw", height: "81vh", borderRadius: 0 }}
      />
      <Body />
    </div>
  );
};

export default Login;
