import React from "react";
import "../Styles/Cards.css";
import {FaAngleRight} from "react-icons/fa"

const Cards = ({ ImgSrc, title, desc}) => {
  return (
    <div className="card">
      <img className="card__img" src={ImgSrc} alt="" />
      <div className="h-[94px] p-6">
        <p className="font-bold text-[#CB1C8D] text-xl">{title}</p>
        <p className="card__price">{desc}</p>
        <button className="card__btn"><FaAngleRight/></button>
      </div>
    </div>
  );
};

export default Cards;
