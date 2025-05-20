import React from 'react'
import skills from './data/skills.json'

export const Skills = () => {
  return (
     <>
       <div className="container skills" id='Skills'>
            <h1
             data-aos="zoom-out-right"
             data-aos-duration="1000"
            >Technical Skills</h1>
            <div className="items" > 
             {
                skills.map((data)=>(
                     
                    <>
                        
                            <div 
                              className="item" 
                              key={data.id}
                              data-aos="flip-left"
                              data-aos-duration="1000"
                              >
                                 <img src={data.imageSrc} alt="" />
                                 <h3>{data.title}</h3>
                            </div> 
                        
                    </>
                    
                ))
             }
            </div>
       </div>
     </>
  )
}

