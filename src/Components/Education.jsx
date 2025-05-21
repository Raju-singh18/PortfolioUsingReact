import React from 'react'
import education from './data/education.json'

export const Education = () => {
  return (
     <>
       <div className="container ed" id='Education'>
          <h1
          data-aos="zoom-out-right"
          data-aos-duration="500"
          >Education</h1>
          {
            education.map((data)=>{
                return(
                 <>
                    <div key={data.id} className='ed-items text-center my-5'
                     data-aos="zoom-in"
                     data-aos-duration="500"
                    >
                        <div className="left">
                            <img src={data.imageSrc} alt="" />
                        </div>
                        <div className="right">
                            <h2>{data.name}</h2>
                            <h3>{data.class}</h3>
                            <h4>
                              <span style={{color:'yellow'}}>{data.startDate}</span>{" "}
                              <span style={{color:'yellow'}}>{data.endDate}</span>{" "}
                              <span style={{color:'yellow'}}>{data.location}</span>
                            </h4>
                            <h5>{data.percent}</h5>

                        </div>

                    </div>
                 </>
                )
            })
          }
       </div>
     </>
  )
}
