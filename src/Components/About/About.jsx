import React from 'react';
import para from './Content';  // Make sure the import path is correct
import './About.css'
import featuredimage from '../Assets/Featured-Image.png'

const About = () => {
  return (
    <div>
      <div className="about-cont">
        <div className="about-text">
          <h1>About Dental and Oral Health</h1>
          {para.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
          {para.map((item,index)=>(
            <p>Conclusion:{item.Conclusion}</p>
          ))}
        </div>
        <div className="about-image">
          <img src={featuredimage} alt='loading'/>
          {/* Add your image or image-related content here */}
        </div>
      </div>
    </div>
  );
};

export default About;
