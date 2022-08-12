import React from 'react'
import './Middle.css'
import im from '../Assets/goog.png';
import mic from '../Assets/mic.png';
import search from '../Assets/search.svg';
function Middle() {
  return (
    <section className='mid'>
        <div className='mar'>
            <img src={im} alt="ic" className='img'/>
            <div className='micser'>
              <img src={search} alt="ic" className='searc'/>
              <input placeholder='Search or enter the URL'></input>
              <img src={mic} alt="ic" className='mic'/>
            </div>
            
            <div className='but'>
                <button>Google search</button>
                <button>I'm feeling lucky</button>
            </div>
            <div className='text'>
              <p>Google offered in:</p> <p className='col'>Hausa Igbo Ede Yoruba Nigerian Pidgin</p>
            </div>
            
        </div>
    </section>
    
  )
}

export default Middle
