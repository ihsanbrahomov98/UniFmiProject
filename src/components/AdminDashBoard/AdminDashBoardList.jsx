import React from "react";
import AdminDashBoardMainBody from "./AdminDashBoardMainBody";
const AdminDashBoardList = () => {
  return (
    <>
      <div className="">
        <div className=" d-flex flex-row ">
          <div className="col-2 d-flex flex-column justify-content-start align-items-start ps-4 border-end ">
            <div className="ps-2">Main</div>
            <div className="ps-3">DashBoard</div>
          </div>
          <div className="col-10  border-end ">
            <AdminDashBoardMainBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardList;
