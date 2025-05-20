
import React from 'react'

export const Navbar = () => {
  return (
    <div className='container nav_bar'
      data-aos="fade-down"
      data-aos-duration="1000"
    > 
         <div className="left nav_items">RAJU KUMAR SINGH</div>
         <div className="right nav_item">
             <div>
              <a href="#Home" className="nav_items">Home</a>
             </div>
             <div>
              <a href="#Education" className="nav_items">Education</a>
             </div>
             <div>
              <a href="#Skills" className="nav_items">Skills</a>
             </div>
             <div>
              <a href="#Project" className="nav_items">Project</a>
             </div>
             <div>
              <a href="#Contact" className="nav_items">Contact</a>
             </div>
         </div>
    </div>
  )
}

