import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const LeftNavbarElements = () => {
  return (
    <div
      className="
    w-25 d-flex justify-content-center align-items-center "
    >
      <div>
        <LocalPhoneIcon sx={{ fontSize: 35 }} />
      </div>
      <div>
        <div>text1</div>
        <div>text2</div>
      </div>
    </div>
  );
};

export default LeftNavbarElements;
