import React from "react";
import "./adminDashBoardMainBody.css";
import AdminDashBoardTableList from "./AdminDashBoardTableList";
const AdminDashBoardMainBody = () => {
  return (
    <>
      <div className="container  ">
        <div className="d-flex justify-content-between p-2">
          <div className="fs-5 fw-bold">Customers</div>
          <div className="adminDashBoardMainBody p-2">Add new</div>
        </div>
        <div className="TABLE-INFO container border">
          <div className="row border-bottom pb-3 pt-3">
            <div className="col-1">check</div>
            <div className="col-2">1</div>
            <div className="col-2">2</div>
            <div className="col-2">3</div>
            <div className="col-2">4</div>
            <div className="col-3">5</div>
          </div>
          <AdminDashBoardTableList />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardMainBody;
