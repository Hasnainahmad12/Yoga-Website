import React from 'react'
import "../Styles/TeamPage.css";
import TeamCards from '../Components/TeamCards'
import { team } from '../Config/Data'

const Team = () => {
  return (
    <div>
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

export default Team