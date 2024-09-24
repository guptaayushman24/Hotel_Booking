import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  function opensignup(){
    navigate('./signup');
  }
  function opensignin(){
    navigate('./signin')
  }
  return (
    <div className='parentdiv'>
      <div className='navbar'>
        <div className='services'>Services</div>
        <div className='services'>Blog</div>
    
        <div className='services'>Contact Us</div>
        <div className='services'><button id='signup' onClick={opensignup}>SingUp</button></div>
       
       
        <div className='services'><button id='login' onClick={opensignin}>LogIn</button></div>
     
      </div>

      <div className='centerdiv'>
        <div className='contentdiv'>Make yourself at home in <span className='spantag'>Our</span> <br/>hotel.
        <div>
            
           <span className='spancontent'>Simple -Unique -Friendly</span>
        </div>
        </div>
        <div className='imagediv'>
            <img src={'./Hotel_Image.webp'}></img>
        </div>
      </div>
      <div className='centerdiv'>
        <div className='contentdiv'>
         <img src={'./Hotel_Image2.jpeg'}></img>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div className='imagediv2'>
          About us<br/>
           The best holidays<br/> start here <br/>
        </div>
        <div style={{marginLeft:'40rem'}}>
         <p>Staying in a hotel offers a unique blend of comfort, luxury, and convenience. From the moment you step in, you're greeted by a warm atmosphere designed to make you feel at home while escaping the everyday routine. Plush beds, elegant interiors, and world-class amenities await, ensuring that relaxation comes naturally.</p>
          <button className='readblogs'>Read Blogs</button>
        </div>
        </div>
      </div>
      <div className='lastdiv'>
            <div className='lastdivheading'>
                Our Rooms
            </div>
            <div className='roomsdiv'>
                <div className='image'><img src={'./Hotel_Image3.jpg'}></img></div>
                <div className='image'><img src={'./Hotel_Image4.jpg'}></img></div>
                <div className='image'><img src={'./Hotel_Image5.jpg'}></img></div>
            </div>
        </div>
    </div>

  )
}

export default Home
