import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div>
        <div className='banner-section'>
            <div className='banner-content'>
                <h1>Dental and Oral Health Events 2025</h1>
                <h4>New Challenges & Current Trends in Dental and Oral Health</h4>
            </div>
        </div>
       <div className='cards'>
            <div className='card'>
                <h4 className='card-heading'>Dental and Oral Health</h4>
                <button className='card-button'>View More</button>
            </div>
            <div className='card'>
                <h4 className='card-heading'>American World Orthodontics</h4>
                <button className='card-button'>View More</button>
            </div>
            <div className='card'>
                <h4 className='card-heading'>Dentists & Pediatric Dentistry</h4>
                <button className='card-button'>View More</button>
            </div>
            <div className='card'>
                <h4 className='card-heading'>Modern Dentistry</h4>
                <button className='card-button'>View More</button>
            </div>

        </div>
    </div>
  )
}

export default Banner
