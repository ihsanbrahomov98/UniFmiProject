import React from "react";

const IconItem = ({ srcProp, styleProp, altProp }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <img src={srcProp} style={styleProp} alt={altProp} />

        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ width: "5rem" }}
        >
          hello
        </div>
      </div>
    </>
  );
};

export default IconItem;
