
import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { CiFacebook } from "react-icons/ci"
import {CiLinkedin } from "react-icons/ci"
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaGithubSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Form } from './Form'

export const Contact = () => {
  return (
     <>
      <div className="container contact" id='Contact'>
        <h1
        data-aos="zoom-out-right"
        data-aos-duration="500"
        >CONTACT ME</h1>
          <br />
               <Form/>
          
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        >
            <a href="https://www.google.com" className="items">
                <FaInstagram className='icons'/>
            </a>
            <a href='https://www.google.com' className="items">
                <CiFacebook className='icons'/>
            </a>
            <a href='https://www.linkedin.com/in/raju-kumar-singh-428b87343/' className="items">
                 <CiLinkedin className='icons'/>
            </a>
            <a href='https://www.google.com' className="items">
                 <FaSquareXTwitter className='icons'/>
            </a>
            <a href='https://github.com/Raju-singh18' className="items">
                  <FaGithubSquare className='icons'/>
            </a>
            <a href='mailto:rajusingh.mca2026@gmail.com' className="items">
                  <SiGmail className='icons'/>
            </a>
        </div>
      </div>
     </>
  )
}
