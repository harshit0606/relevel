import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import "./header.css";
import Logo from "../../Assets/1.png";
function Header() {
  return (
    <div className='header'>
        <div className='header_logo'>
            <img className='logo_img' src={Logo} alt="logo"/>
        </div>
        <div className='header_links'>
            {/*<h1>About</h1>
            <h1>Test</h1>
  <button className='contact'>Contact us</button>*/}
            <h1>Partial-mandibulectomy Prosthetic Guide</h1>
        </div>
        <div className='ham_icon'>
            <GiHamburgerMenu/>
        </div>
    </div>
  )
}

export default Header;