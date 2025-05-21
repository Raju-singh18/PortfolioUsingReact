
import React from 'react'
import { IoMdMenu } from "react-icons/io";

export const Navbar = ({menuOpen, setMenuOpen}) => {

  return (

    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      {/* Name always visible */}
      <div className="left nav_items nav_name">RAJU KUMAR SINGH</div>

      {/* Desktop menu */}
      <div className="right nav_links desktop">
        <a href="#Home" className="nav_items">Home</a>
        <a href="#Education" className="nav_items">Education</a>
        <a href="#Skills" className="nav_items">Skills</a>
        <a href="#Project" className="nav_items">Project</a>
        <a href="#Contact" className="nav_items">Contact</a>
      </div>

      {/* Mobile menu icon */}
      <div className="right menu_icon mobile">
        <IoMdMenu className="menu" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile_menu mobile">
          <a href="#Home" className="nav_items">Home</a>
          <a href="#Education" className="nav_items">Education</a>
          <a href="#Skills" className="nav_items">Skills</a>
          <a href="#Project" className="nav_items">Project</a>
          <a href="#Contact" className="nav_items">Contact</a>
        </div>
      )}
    </div>
  )
}


