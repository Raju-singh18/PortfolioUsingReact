
import React from 'react'

export const Form= () => {
  return (
    <div className='form'
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
        <label
        data-aos="fade-right"
        data-aos-duration="1000"
        htmlFor="name">Name:</label><br /> 
        <input 
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='inputType' type="text" value="name" id='name' placeholder='Your Name' required/><br /><br />
        <label
        data-aos="fade-right"
        data-aos-duration="1000"
        htmlFor="email">Email:</label><br />
        <input 
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='inputType' type="email" value="email" id='email' name='email' placeholder='Enter your Email' required/><br /><br />
        <label
        data-aos="fade-right"
        data-aos-duration="1000"
        for="phone">Phone Number:</label><br />
        <input 
         data-aos="zoom-in"
         data-aos-duration="1000"
         className='inputType' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Your Phone Number' required/> <br /><br />
        <label
        data-aos="fade-right"
        data-aos-duration="1000"
        htmlFor="message">Message</label><br />
        <input 
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='inputType' type="textarea" id='message' value="message" placeholder='Message' required/><br /><br />
        <button 
        data-aos="zoom-in"
        data-aos-duration="1000"
        type="button" className="btn btn-success submit">Send Message</button>
    </div>
  )
}
