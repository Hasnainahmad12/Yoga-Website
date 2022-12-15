import React from "react";
import "../Styles/Services.css";

const Cards = ({ ImgSrc, title, desc, btn}) => {
  return (
    <div className="services__card">
      <img className="servicescard__img" src={ImgSrc} alt="" />
      <div className="h-[94px] p-4 text-center">
        <p className="font-bold text-[#CB1C8D] text-xl">{title}</p>
        <p className="servicescard__desc">{desc}</p>
        <button className="services__btn">{btn}</button>
      </div>
    </div>
  );
};

export default Cards;
