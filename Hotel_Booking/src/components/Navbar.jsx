import React, { useState } from 'react'
import './NavBar.css'
import { Link ,NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <div className='parentdiv'>
    <div className='header'>
      <NavLink to='/'>Landing_Page</NavLink>
      <NavLink to='/Rooms'>Rooms</NavLink>
      <NavLink to='/Contact_us'>Contact Us</NavLink>
      <NavLink to='/About'>About</NavLink>
    </div>
    </div>
  
)
}

export default NavBar
