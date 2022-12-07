import React from "react";
import "./adminDashBoardMainBody.css";

const AdminDashBoardTableList = () => {
  return (
    <>
      <div className="row border-bottom pb-3 pt-3 d-flex align-items-center">
        <div className="col-1">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </div>
        </div>
        <div className="col-2 ">2</div>
        <div className="col-2">
          <div className="">
            <div className=" d-flex align-items- justify-content-start flex-row">
              <img
                src="https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                alt="tree"
                style={{ width: "12%", height: "7%" }}
              />
              <span className="ps-3">Jane </span>
            </div>
          </div>
        </div>
        <div className="col-2">asdas@abv.bg</div>
        <div className="col-2 " style={{ color: "green" }}>
          active
        </div>
        <div className="col-3">
          <div className=" d-flex align-items- justify-content-start flex-row">
            <span className="adminDashBoardPurpleButton ps-2 pe-2 me-3">
              View{" "}
            </span>
            <span className="adminDashBoardRedButton ps-2 pe-2">Delete </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardTableList;
