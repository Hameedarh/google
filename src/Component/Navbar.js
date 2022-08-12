import React from 'react'
import icon from '../Assets/abu.svg';
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <div className='flexen'>
        <a href="www.gmail.com">Gmail</a>
        <a href="www.gmail.com">Images</a>
        <img src={icon} alt="ic" className='icon'/>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Navbar
