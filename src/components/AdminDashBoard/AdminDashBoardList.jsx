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
          <div className="col-12  border-end ">
            <AdminDashBoardMainBody table={table} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardList;
