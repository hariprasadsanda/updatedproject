import React from 'react'
import './Upcomming.css'
import content from './Data'
import { MdOutlineDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Upcomming = () => {
  return (
    <div>
        <div>
            <h1 className='upcomming-heading'>Upcoming International Dental Oral Health Conferences</h1>
        </div>
        <div className='upcomming-cnt'>
            <div className='upcomming-arr'>
                {
                    content.map((item, index) => (
                        <div key={index} className='upcomming-card'>
                            <img src={item.image} alt={item.title} className='upcomming-image' />
                            <h4 className='up-head'>{item.title}</h4>
                            <div className='up-date'>
                                <MdOutlineDateRange  className='date-logo'/>
                                 <h4>{item.date}</h4>
                            </div> 
                            <div className='up-loc'>
                                <FaLocationDot  className='loc-logo'/>
                                <h4>{item.location}</h4>
                            </div>
                            <button className='upcomming-btn'>View Details</button>
                        </div>
                    ))
                }


            </div>

        </div>
      
    </div>
  )
}

export default Upcomming
