import React from "react";

const FoodItem = ({
  imgClassName,
  alt,
  src,
  style,
  ClassNameTheTypeOfTheFoodClassName,
  ClassNameThePriceAndTextArea,
}) => {
  return (
    <>
      <div>
        <img className={imgClassName} alt={alt} src={src} style={style}></img>
        <div className={ClassNameTheTypeOfTheFoodClassName}>Arabian</div>
        <div className={ClassNameThePriceAndTextArea}>15$</div>
        <div className={ClassNameThePriceAndTextArea}>
          info about this nice donner
        </div>
      </div>
    </>
  );
};

export default FoodItem;
