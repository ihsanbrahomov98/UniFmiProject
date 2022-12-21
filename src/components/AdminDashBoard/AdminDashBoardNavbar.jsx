import React from "react";
import { Link } from "react-router-dom";
const AdminDashBoardNavbar = () => {
  return (
    <>
      <div className="border-bottom  ">
        <div className=" d-flex ">
          <div
            style={{ height: "50px" }}
            className="col-2 d-flex justify-content-center align-items-center border-end fs-4 customPurple "
          >
            Ihsanadmin
          </div>
          <div
            style={{ height: "50px" }}
            className="col-10 d-flex justify-content-between align-items-center "
          >
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className=" m-2 p-2 homePageCartPageButtons">Home Page</div>
            </Link>

            <Link style={{ textDecoration: "none" }} to={"/cart"}>
              <div className=" m-3 p-2 homePageCartPageButtons">Cart Page</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardNavbar;
