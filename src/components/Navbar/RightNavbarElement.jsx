import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const RightNavbarElement = () => {
  return (
    <>
      <div className=" w-25 d-flex justify-content-center align-items-center ">
        <ShoppingCartIcon sx={{ fontSize: 35 }}></ShoppingCartIcon>
      </div>
    </>
  );
};

export default RightNavbarElement;
