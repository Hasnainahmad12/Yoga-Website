import React from 'react'
import Cards from '../Components/Cards'
import { news } from '../Config/Data'

const News = () => {
  return (
    <div id='news'>
        <p className='text-center font-bold text-gray-500'>See Recent News</p>
        <h2 className='text-center font-bold text-3xl'>See Our Latest News</h2>

        <div className='flex flex-wrap justify-center gap-12 mt-5'>
            {news.map((it) => {
                return <div>
                    <Cards ImgSrc={it.Img} title={it.title} desc={it.desc}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default News