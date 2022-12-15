import React from "react";
import "../Styles/yogaCards.css"

const YogaCards = ({ ImgSrc, title, desc}) => {
  return (
    <div className="yoga__card">
      <div className="flex flex-wrap gap-2">
        <img className="yogacard__img" src={ImgSrc} alt="" />
        <p className="font-bold text-black text-xl">{title}</p>
      </div>
        <p className="yogacard__price">{desc}</p>
    </div>
  );
};

export default YogaCards;
