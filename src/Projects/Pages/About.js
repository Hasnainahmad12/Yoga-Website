import React from 'react'
import Cards from '../Components/Cards'
import { data } from '../Config/Data'
import "../Styles/About.css";

const About = () => {
  return (
    <div>
        <div className='text-center pt-14' id='about'>
            <h1 className='text-3xl font-semibold'>RECHARGE YOUR ENERGY FOR A NEW LIFE</h1>
            <p className='pt-2 text-gray-600'>It is long established fact that a reader will be directed by the readable content of a
            page when looking at its layout</p>
        </div>

        <div className='flex flex-wrap justify-center gap-10'>
          {data.map((it) =>{
            return <div className='pt-14'>
              <Cards ImgSrc={it.Img} title={it.title} desc={it.desc}/>
            </div>
          })}
        </div>


    </div>
  )
}

export default About