import React from 'react'
import "../Styles/ContactPage.css";
import img from "../Images/y21.jpg";
import Form from '../Components/Form';

const ContactPage = () => {
  return (
    <div className='contact__main relative'> 
        <img src={img} className='contact__image' alt='' />
        <div className='absolute top-0 right-0'>
          <Form />
        </div>
    </div>
  )
}

export default ContactPage