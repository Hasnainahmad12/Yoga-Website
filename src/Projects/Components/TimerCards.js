import React from 'react'
import "../Styles/TimerCards.css";
import { FaClock } from "react-icons/fa"

const TimerCards = ({ImgSrc, Head, Timer, Para, btn}) => {
  return (
    <div className='flex flex-wrap h-[230px] w-[600px] gap-10 bg-pink-500'>
       <div className='border h-48 w-[300px]'>
        <div>
            <img src={ImgSrc}  className="h-52 w-48 "  alt='' />
         </div>
         <div className='w-60'>
            <h2>{Head}</h2>
            <FaClock /><p>{Timer}</p>
            <p>{Para}</p>
             <button>{btn}</button>
         </div>
     </div>
    </div>
  )
}

export default TimerCards