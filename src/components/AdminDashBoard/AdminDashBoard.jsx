import React from "react";
import AdminDashBoardNavbar from "./AdminDashBoardNavbar";
import AdminDashBoardList from "./AdminDashBoardList";
import AdminDashBoardTableList from "./AdminDashBoardTableList";

const AdminDashBoard = () => {
  return (
    <>
      <AdminDashBoardNavbar />

      <AdminDashBoardList table={"products"} />
    </>
  );
};

export default AdminDashBoard;
