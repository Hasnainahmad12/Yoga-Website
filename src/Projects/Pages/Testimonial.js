import React from 'react'
import "../Styles/Testimonial.css";
import y20 from "../Images/y20.jpg"
import y2 from "../Images/y2.jpg"
import { FaPlus } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div>
        <div className='relative' id='testimonial'>
          <img src={y20} className='yoga__image' alt='' />
          <h2 className='absolute top-[200px] text-center text-4xl font-bold text-white left-0 right-0 m-auto'>Watch Our Latest Yoga Club Video</h2>
          <p className='absolute left-0 right-0 top-[285px] text-center font-bold'>It is long established fact that a reader will be directed by the readable content of the page when looking its layout</p>
        </div>

        {/* Testimonail Section */}
        <div className="main__testimonail ">
        <div className="testimonail">
          <h1>Testimonial</h1>
          <div className="testimonail__inner ">
            <img src={y2} className='test__img' />
            <p className="testimonail__para ">In literary theory, a text is any object that can be "read",
             whether this object is a work of literature, a street sign,
              an arrangement of buildings on a city block, or styles of clothing.
              an arrangement of buildings on a city block, or styles of clothing.
              an arrangement of buildings on a city block, or styles of clothing. </p>
              <h6 className=" mt-2 ">Leo</h6>
              <p className="font-normal text-sm">Employee</p>
            
          </div>
        </div>
        <div className="Question ">
          <h2 className="mt-4">Frequently Asked Question</h2>
          <div className="underline"></div>
          <div className="bg-pink-100 p-7 mt-7">
          <p className="text-sm flex"><BsDash className="mt-1 text-xl"/> How much do a bussniss plane cost ?</p>
          <p className="font-normal text-sm leading-6 mt-6">It is long established fact that a reader will be 
          disracted by the readable content of the page when
           looking at its layout</p>
          
           <div className="leading-6 mt-4">
           <hr/>
            <p className="flex gap-2 font-bold text-sm p-1"><FaPlus className="mt-1 text-pink-600 "/>Do you provided client reference ?</p>
            <hr/>
           
            <p className="flex gap-2 font-bold text-sm p-1 "> <FaPlus className="mt-1 text-pink-600 "/>Do i contact some of your former client ?</p>
            <hr/>
            <p className="flex gap-2 font-bold text-sm p-1"> <FaPlus className="mt-1 text-pink-600 "/>How much deos bussniss plane cost ?</p>
          </div>

          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Testimonial