import React from "react";
import IconItem from "./IconItem";
const IconList = () => {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <IconItem
          srcProp={"/christmas_3.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />
        <IconItem
          srcProp={"/Inspirations.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />{" "}
        <IconItem
          srcProp={"/Appliances.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />{" "}
        <IconItem
          srcProp={"/Clothing.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />{" "}
        <IconItem
          srcProp={"/Gifts-and-parties.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />{" "}
        <IconItem
          srcProp={"/Health-and-Beauty.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />{" "}
        <IconItem
          srcProp={"/Home-and-furniture.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />{" "}
        <IconItem
          srcProp={"/Jewellery.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />
        <IconItem
          srcProp={"/Sports.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />
        <IconItem
          srcProp={"/Technology_1.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />
        <IconItem
          srcProp={"/Toys_1.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
        />
      </div>
      <div className="container d-flex justify-content-between"></div>
    </>
  );
};

export default IconList;
