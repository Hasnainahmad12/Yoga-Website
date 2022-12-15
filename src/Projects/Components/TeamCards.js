import React from "react";
import "../Styles/Team.css";
import {FaPhone , FaMailBulk} from "react-icons/fa"

const TeamCards = ({ ImgSrc, name, title, desc, email}) => {
  return (
    <div className="team__card">
      <img className="team__img" src={ImgSrc} alt="" />
      <div className="h-[94px] p-4 ">
        <p className="font-bold">{name}</p>
        <p className="font-bold text-[#CB1C8D]">{title}</p>
        <p className="team__desc"><FaPhone className="text-[#CB1C8D]"/>{desc}</p>
        <p className="team__desc"><FaMailBulk className="text-[#CB1C8D]"/>{email}</p>
      </div>

    </div>
  );
};

export default TeamCards;
