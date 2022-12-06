import React from "react";
import "./subCategoryButtons.css";
const SubCategoryButtons = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="fs-3 fw-light">Връхни облекла</div>
        <div className="d-flex flex-row">
          <span
            class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 subCategoryButtonsBorder  p-2 mt-4 me-2"
            style={{ width: "6rem", height: "3.5rem" }}
          >
            Палта
          </span>
          <span
            class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 subCategoryButtonsBorder p-2 mt-4 me-2 "
            style={{ width: "6rem", height: "3.5rem" }}
          >
            Тренчкот
          </span>
          <span
            class="mt-1 d-flex f-row justify-content-center align-items-center fs-6 subCategoryButtonsBorder p-2 mt-4 "
            style={{ width: "6rem", height: "3.5rem" }}
          >
            Якета
          </span>
        </div>
      </div>
    </>
  );
};

export default SubCategoryButtons;
