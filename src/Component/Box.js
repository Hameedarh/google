import React from 'react'
import './Box.css'
import logo from '../Assets/log.svg';

function Box() {
  return (
    <section className='flexen1'>
        <div className='back'>
            <div className='flex'>
            <img src={logo} alt="ic" className="log"/>
                <nav className='line'>
                    <div className='bod'>
                        <h4>It's been 6 months since your last Google Account visit</h4>
                        <p>confirm your settings and make sure they are still right for you</p>
                        <div className='down'>
                            <h5>No, thanks</h5>
                            <button>Confirm</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </section>
    
  )
}

export default Box
