import React from "react";
import AdminDashBoardNavbar from "./AdminDashBoardNavbar";
import AdminDashBoardList from "./AdminDashBoardList";
import AdminDashBoardTableList from "./AdminDashBoardTableList";

const AdminDashBoardUsers = () => {
  return (
    <>
      <AdminDashBoardNavbar />

      <AdminDashBoardList table={"user"} />
    </>
  );
};

export default AdminDashBoardUsers;
