import './navbar.css'
import NetflixLogoSvg from './images/NetflixLogoSvg.png';
import Search from './images/Search.png'
import GiftBox from './images/GiftBox.png'
import NotificationBell from './images/NotificationBell.png'
import ProfileIMG from './images/ProfileIMG.png'
import DownArrow from './images/DownArrow.png'
import { useState } from "react";
import React from 'react';

const Navbar = () => {
  const [scrolled,setscrolled]=useState(false);
  window.onscroll = () => {
    setscrolled(window.pageYOffset ===0 ? false: true);
    return()=>(window.onscroll=null);
  };

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
    <div className="navbar">
      
      <div className="container">
        <div className="left">
          <img style={{height:20}}src={NetflixLogoSvg} alt="Logo"/>
          <span>Home</span>
          <span>Series</span>
          <span>movies</span>
          <span>new</span>
          <span>My List</span>
        </div>
          <div className="right">
             <img className="icon" src={Search}/> 
            <img src={GiftBox}/>
            <img src={NotificationBell} />
            <img src={ProfileIMG} />
            
            <div className="profile">
            <img src={DownArrow}  />
            <div className="option">
              <span>Setting</span>
              <span>Logout</span>
              </div>
            </div>

            


          </div>
        
      </div>
      </div>
      </div>
  )
}

export default Navbar
