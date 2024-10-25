import React, { useEffect } from 'react'
import '../Navbar/Navbar.css'
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import logo from '../Assets/Dental logo.png'; 
import { Link,useNavigate } from "react-router-dom";




const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);

    // const [selectedOption, setSelectedOption] = useState("");
    // const navigate = useNavigate();
  
    // const handleSelectChange = (event) => {
    //   const selectedValue = event.target.value;
    //   if (selectedValue) {
    //     navigate(`/${selectedValue}`);
    //     setSelectedOption(""); // Reset the dropdown after navigation
    //   }
    // };
  

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        const chageWidth=()=>{
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize',chageWidth);
    },[])


  return (
    <div>
          <div className='navbar'>
                <div>
                    <img src={logo}  alt="loading logo" className='logo'/>
                </div>
                <div className='items'>
                <ul className='li-items'>
                        <li className='li-text'><a href='#'>Home</a></li>
                        <li className='li-text' >
                        <select className='select'>
                            <option value="" disabled hidden>UP COMMING EVENTS</option>
                            <option value="Dentaloral">Dental Oral Health Conference</option>
                            <option value="Orthodontics">Orthodontics Conference</option>
                            <option value="Pediatric">Pediatric Dentistry Conference</option>
                            <option value="Modern">Modern Dentistry Conference</option>
                            <option value="Dentalresearch">Dental Research Oral Health Conference</option>
                            <option value="Astheic">Aesthetic Dentistry Conference</option>
                            <option value="Dentalpharmacology">Dental Pharmacology Conference</option>
                       </select>
                        </li>
                        <li className='li-text'><a href='#'>Contact</a></li>
                        <li className='li-text'><a href='#'>Venue</a></li>
                        <li className='li-text'><a href='#'>Speaker Guidelines</a></li>
                        <li className='li-text'><a href='#'>Contact Us</a></li>
                </ul>
                </div>
                <div>
                    <button className='register'>REGISTER NOW</button>
                </div>
                <div className='menu'>
                 <FiAlignJustify onClick={toggleMenu} className='button' />
                </div>
           </div>
               {
                (isOpen || screenWidth > 500) &&
                (<div className='mobile-menu'>
                    <ul >
                        <li ><a href='#'>Home</a></li>
                        <li >
                        <select className='after-select'>
                            <option value="" disabled hidden>UP COMMING EVENTS</option>
                            <option value="Dentaloral">Dental Oral Health Conference</option>
                            <option value="Orthodontics">Orthodontics Conference</option>
                            <option value="Pediatric">Pediatric Dentistry Conference</option>
                            <option value="Modern">Modern Dentistry Conference</option>
                            <option value="Dentalresearch">Dental Research Oral Health Conference</option>
                            <option value="Astheic">Aesthetic Dentistry Conference</option>
                            <option value="Dentalpharmacology">Dental Pharmacology Conference</option>
                       </select>
                        </li>
                        <li ><a href='#'>Contact</a></li>
                        <li ><a href='#'>Venue</a></li>
                        <li ><a href='#'>Speaker Guidelines</a></li>
                        <li ><a href='#'>Contact Us</a></li>
                </ul>
                </div>)
 
               }
    </div>
  )
}

export default Navbar
