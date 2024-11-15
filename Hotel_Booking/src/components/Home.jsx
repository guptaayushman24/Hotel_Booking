import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
function Home() {
  const navigate = useNavigate();
  function opensignup(){
    navigate('./signup');
  }
  function opensignin(){
    navigate('./signin')
  }
  function postblog(){
    navigate('/postblog')
  }
  function service(){
    navigate('/roomservice');
  
  }
  function contactus(){
    navigate('/contactus');
  }
  function openblog(){
    navigate('/seeallblog');
  }
  return (
    <div className='parentdiv'>
    
      <div className='navbar'>
      <button class="menu-icon" onclick="toggleMenu()">☰</button>
        <div className='services' onClick={service}>Services</div>
        <div className='services' onClick={postblog}>Blog</div>
    
        <div className='services' onClick={contactus}>Contact Us</div>
        <div className='services'><button id='signup' onClick={opensignup}>SingUp</button></div>
       
       
        <div className='services'><button id='login' onClick={opensignin}>LogIn</button></div>
     
      </div>

      <div className='centerdiv'>
        <div className='contentdiv'>Make yourself at home in <span className='spantag'>Our</span> <br/>hotel.
        <div id='spancontent'>Simple -Unique -Friendly</div>
        <div>
            
         
        </div>
        </div>
        <div className='imageroomsdiv'>
       
            <img src={'./Hotel_Image.webp'} className='imagerooms'></img>
        </div>
      </div>
      <div className='centerdivmid'>
        <img src={'./Hotel_Image2.jpeg'} className='imageroomsmid'></img>
        <div className='contentdivimagerooms2'>
        <div className='imageroomsdiv2'>
        
          About us<br/>
           The best holidays<br/> start here <br/>
        </div>
        <div className='divpara'>
         <p className='divparap'>Staying in a hotel offers a unique blend of comfort, luxury, and convenience. From the moment you step in, you're greeted by a warm atmosphere designed to make you feel at home while escaping the everyday routine. Plush beds, elegant interiors, and world-class amenities await, ensuring that relaxation comes naturally.</p>
          <button className='readblogs' onClick={openblog}>Read Blogs</button>
        </div>
        </div>
      </div>
      <div className='lastdiv'>
            <div className='lastdivheading'>
                Our Rooms
            </div>
            <div className='roomsdiv'>
                <div className='imagerooms'><img src={'./Hotel_Room.jpeg'}></img></div>
                <div className='imagerooms'><img src={'./Hotel_Image5.jpg'}></img></div>
                <div className='imagerooms'><img src={'./Hotel_Image4.jpg'}></img></div>
            </div>
        </div>
    </div>

  )
}

export default Home
