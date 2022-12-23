import React from 'react'
import { services } from '../Config/Data'
import ServicesCards from "../Components/ServicesCards";

const Services = () => {
  return (
    <div>
        <div className='services__area' id='services'>
          <p className='services__our'>Our Services</p>
          <h2 className='text-3xl font-bold'>Our Services Area</h2>
        </div>
        
        <div className='flex flex-wrap justify-center mt-5 gap-10'>
           {services.map((it) =>{
             return <div>
              <ServicesCards ImgSrc={it.Img} title={it.title} desc={it.desc} btn={it.btn}/>
            </div>
            })}
            
        </div>
    </div>
  )
}

export default Services