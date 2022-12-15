import React from "react";
import "../Styles/ChooseCards.css"

const ChooseCards = ({ ImgSrc, title, desc}) => {
  return (
    <div className="choose__card">
      <div className="flex flex-wrap gap-2">
        <img className="choosecard__img" src={ImgSrc} alt="" />
        <p className="choosecard__title">{title}</p>
      </div>
        <p className="choosecard__price">{desc}</p>
    </div>
  );
};

export default ChooseCards;
