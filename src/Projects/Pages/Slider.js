import React from 'react';
import "../Styles/Slider.css";
import main from "../Images/y1.jpg";
import { choose, club, data, services, team } from '../Config/Data';
import Cards from '../Components/Cards';
import YogaCards from '../Components/YogaCards';
import ServicesCards from "../Components/ServicesCards";
import ChooseCards from '../Components/ChooseCards';
import y10 from "../Images/y10.avif"
import y17 from "../Images/y17.jpg"
import TeamCards from '../Components/TeamCards';


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

        <div className='text-center pt-14'>
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
        

        <div className='services__area'>
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
          
        <div className='flex flex-wrap justify-center mt-4'>
            <div className='Choose__Desc'>
              <h2 className='choose__title'>Why We Choose US ?</h2>
                {choose.map((it) => {
                  return <div>
                    <ChooseCards ImgSrc={it.Img} title={it.title} desc={it.desc}/>
                  </div>
                })}
            </div>
            <div className='Choose__image'>
                <img src={y17} className='' alt='' />
            </div>
        </div>

        <div className='services__area'>
          <p className='our__team'>Our Team</p>
          <h2 className='text-3xl font-bold'>Meet The Team Member</h2>
        </div>
        <div className='flex flex-wrap justify-center mt-8 gap-10'>
            {team.map((it) =>{
            return <div>
              <TeamCards ImgSrc={it.Img} name={it.member} title={it.title} desc={it.phone} email={it.email}/>
            </div>
            })}
        </div>

    </div>
  )
}

export default Slider