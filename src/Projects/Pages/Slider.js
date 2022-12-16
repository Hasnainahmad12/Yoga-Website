import React from 'react';
import "../Styles/Slider.css";
import main from "../Images/y1.jpg";

const Slider = () => {
  return (
    <div>
        <div className='relative'>
            <img src={main} className='slider__image' alt='' />
            <div className='absolute text-center left-0 right-0 top-[300px] ml-auto mr-auto m-auto flex justify-center'>
                <h2 className='font-extrabold text-4xl text-green-900'>LIFE IS BETTER WITH YOGA</h2>
                <p className='slider__desc'>It is long established fact that a reader will be distracted by the readable content of the page
                when looking at its layout</p>
                <button className='slider__btn'>Get a Free Registration</button>
            </div>
        </div>
    </div>
  )
}

export default Slider