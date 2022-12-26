import React from "react";
import { Link } from "react-router-dom";
import "./topNavbar.css";
const TopNavbar = () => {
  return (
    <>
      <Link to={"/admindashboard/users"} style={{ textDecoration: "none" }}>
        <div className="topNavbar d-flex justify-content-center align-items-sm-center fs-6  text-white p-1">
          НАМАЛЕНИЕ НА ВРЪХНИ ОБЛЕКЛА ДО -50 %
        </div>
      </Link>
    </>
  );
};

export default TopNavbar;
