import React from 'react'
import "../Styles/Form.css";

const Form = () => {
  return (
    <div>
        <h2 className='contact__head'>Book an appointment</h2>
        <div className='h-3 w-10 border-b-4 border-pink-500'></div>
        <form className='contact__form' action='' method=''>
          <div className='flex flex-wrap gap-2'>
            <input type="text" className='contact__input' placeholder='Name' />
            <input type="email" className='contact__input'  placeholder='Email' />
            <input type="number" className='contact__input'  placeholder='Phone' />
            <input type="text" className='contact__input'  placeholder='Select' />
            <textarea type='text' className='contact__textarea' placeholder='Message'/>
            <input type="submit" className='contact__button' value="SEND REQUEST" />

          </div>
        </form>
    </div>
  )
}

export default Form