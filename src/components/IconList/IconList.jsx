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
          textInfo={"Коледни"}
        />
        <IconItem
          srcProp={"/Inspirations.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Забавление"}
        />{" "}
        <IconItem
          srcProp={"/Appliances.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Техника"}
        />{" "}
        <IconItem
          srcProp={"/Clothing.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Дрехи"}
        />{" "}
        <IconItem
          srcProp={"/Gifts-and-parties.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Подаръци"}
        />{" "}
        <IconItem
          srcProp={"/Health-and-Beauty.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Уреди"}
        />{" "}
        <IconItem
          srcProp={"/Home-and-furniture.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Мебели"}
        />{" "}
        <IconItem
          srcProp={"/Jewellery.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Бижута"}
        />
        <IconItem
          srcProp={"/Sports.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Спортни"}
        />
        <IconItem
          srcProp={"/Technology_1.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Телевизори"}
        />
        <IconItem
          srcProp={"/Toys_1.webp"}
          styleProp={{ height: "5rem", width: "5rem" }}
          altProp={"logo"}
          textInfo={"Играчки"}
        />
      </div>
      <div className="container d-flex justify-content-between"></div>
    </>
  );
};

export default IconList;
