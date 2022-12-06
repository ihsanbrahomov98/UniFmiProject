import React from "react";
import FoodItem from "./FoodItem";

const Items = () => {
  return (
    <div className=" container d-flex justify-content-between align-space-between bg-danger w-90 p-5">
      <FoodItem
        imgClassName={"rounded-circle shadow-4-strong"}
        alt={"donner"}
        src={
          "https://chefoodrevolution.com/wp-content/uploads/2021/05/Il-Doner-Kebab-Vegetariano.jpg"
        }
        style={{ height: "16rem", width: "16rem" }}
        ClassNameTheTypeOfTheFoodClassName={
          "d-flex justify-content-center align-items-center h-15 pt-3 pb-1"
        }
        ClassNameThePriceAndTextArea={
          "d-flex justify-content-center align-items-center pb-1"
        }
      ></FoodItem>
      <FoodItem
        imgClassName={"rounded-circle shadow-4-strong"}
        alt={"donner"}
        src={
          "https://chefoodrevolution.com/wp-content/uploads/2021/05/Il-Doner-Kebab-Vegetariano.jpg"
        }
        style={{ height: "16rem", width: "16rem" }}
        ClassNameTheTypeOfTheFoodClassName={
          "d-flex justify-content-center align-items-center h-15 pt-3 pb-1"
        }
        ClassNameThePriceAndTextArea={
          "d-flex justify-content-center align-items-center pb-1"
        }
      ></FoodItem>
      <FoodItem
        imgClassName={"rounded-circle shadow-4-strong"}
        alt={"donner"}
        src={
          "https://chefoodrevolution.com/wp-content/uploads/2021/05/Il-Doner-Kebab-Vegetariano.jpg"
        }
        style={{ height: "16rem", width: "16rem" }}
        ClassNameTheTypeOfTheFoodClassName={
          "d-flex justify-content-center align-items-center h-15 pt-3 pb-1"
        }
        ClassNameThePriceAndTextArea={
          "d-flex justify-content-center align-items-center pb-1"
        }
      ></FoodItem>
      <FoodItem
        imgClassName={"rounded-circle shadow-4-strong"}
        alt={"donner"}
        src={
          "https://chefoodrevolution.com/wp-content/uploads/2021/05/Il-Doner-Kebab-Vegetariano.jpg"
        }
        style={{ height: "16rem", width: "16rem" }}
        ClassNameTheTypeOfTheFoodClassName={
          "d-flex justify-content-center align-items-center h-15 pt-3 pb-1"
        }
        ClassNameThePriceAndTextArea={
          "d-flex justify-content-center align-items-center pb-1"
        }
      ></FoodItem>
    </div>
  );
};

export default Items;
