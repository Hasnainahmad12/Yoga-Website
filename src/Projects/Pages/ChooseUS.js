import React from 'react'
import ChooseCards from '../Components/ChooseCards'
import { choose } from '../Config/Data'
import y17 from "../Images/y17.jpg"
import "../Styles/ChooseUs.css";

const ChooseUS = () => {
  return (
    <div>
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
    </div>
  )
}

export default ChooseUS