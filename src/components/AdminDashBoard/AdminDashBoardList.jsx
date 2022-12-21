import React from "react";
import AdminDashBoardMainBody from "./AdminDashBoardMainBody";
import { PeopleFill } from "react-bootstrap-icons";
import { PersonWorkspace } from "react-bootstrap-icons";
import { Diagram3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AdminDashBoardList = ({ table }) => {
  return (
    <>
      <div className="">
        <div className=" d-flex flex-row ">
          <div className="col-2 d-flex flex-column justify-content-start align-items-start ps-4 border-end ">
            <div className="ps-2 fs-3 customPurple">Tables:</div>
            <Link className="customPurple" to={"/admindashboard/users"}>
              <div className="ps-3 mb-2 mt-2">
                <PeopleFill className="fs-4 customPurple mb-2 " />
                <span className="ps-1 fs-4  fw-bold"> Users</span>
              </div>
            </Link>
            <Link className="customPurple" to={"/admindashboard/admins"}>
              <div className="ps-3 mb-2">
                <PersonWorkspace className="fs-4 customPurple mb-2" />
                <span className="ps-1 fs-4 fw-bold"> Admins</span>
              </div>
            </Link>
            <Link className="customPurple" to={"/admindashboard/products"}>
              <div className="ps-3 mb-2">
                <Diagram3Fill className="fs-4 customPurple mb-2" />
                <span className="ps-1 fs-4 fw-bold "> Products</span>
              </div>
            </Link>
          </div>
          <div className="col-10  border-end ">
            <AdminDashBoardMainBody table={table} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardList;
