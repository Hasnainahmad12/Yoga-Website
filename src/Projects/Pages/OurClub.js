import React from 'react'
import YogaCards from '../Components/YogaCards'
import { club } from '../Config/Data'
import y10 from "../Images/y10.avif"

const OurClub = () => {
  return (
    <div className='mt-24 flex flex-wrap justify-center gap-14'>

        <img src={y10} className='h-[520px] w-[380px]' alt='' />

        <div className='h-[400px] w-[650px] flex flex-wrap'>
            <h2 className='text-4xl font-bold pl-5'>Welcome to Our Yoga Club</h2>
            <p className='pt-4 pl-5'>This is our first Yoga club in Peshawar Kpk. This is our first Yoga club in Peshawar Kpk</p>
       
         <div className='flex flex-wrap justify-center'>
             {club.map((it) =>{
                return <div>
                    <YogaCards ImgSrc={it.Img} title={it.title} desc={it.desc}/>                
                </div>
              })}
           </div>
      </div>
            
    </div>
  )
}

export default OurClub