import React from "react";
import { Link } from "react-router-dom";
import "./topNavbar.css";
const TopNavbar = () => {
  return (
    <>
      <Link to={"/admindashboard/products"} style={{ textDecoration: "none" }}>
        <div className="topNavbar d-flex justify-content-center align-items-sm-center fs-6  text-white p-1">
          От тук може да се влезне в админ панела
        </div>
      </Link>
    </>
  );
};

export default TopNavbar;
