import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faUser,faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Home.css'
function Home() {
  const navigate = useNavigate();
  const [hidesidenavigationbar,sethidesidenavigationbar] = useState(false);
  const showsidenavbar = useRef(null);
  function toggleMenu(){
    sethidesidenavigationbar(!hidesidenavigationbar);
    if (hidesidenavigationbar==false){

      showsidenavbar.current.style.display = 'flex';
    }
    else{
      showsidenavbar.current.style.display = 'none';
    }
  }
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
      <div className='navbarparent'>
      {
        hidesidenavigationbar?(
          <button class="menu-icon" onClick={toggleMenu}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
        ):(
          <button class="menu-icon" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
        )
      }
      </div>
      <div className='navbar'>
        <div className='services' onClick={service}>Services</div>
        <div className='services' onClick={postblog}>Blog</div>
    
        <div className='services' onClick={contactus}>Contact Us</div>
        <div className='services'><button id='signup' onClick={opensignup}>SingUp</button></div>
       
       
        <div className='services'><button id='login' onClick={opensignin}>Login</button></div>
     
      </div>
      {/* Mobile View/*/}
      <div>
      <div className='homesidenavbar' ref={showsidenavbar}>
            <div className='servicesresponsive' onClick={service}>
                Services
            </div>
            <div className='servicesresponsive' onClick={postblog}>
                Blog
            </div>
            <div className='servicesresponsive' onClick={contactus}>
                Contact Us
            </div>
            <div className='servicesresponsive'>
                <button className='buttontext' onClick={opensignup} id='buttonsignup'>Signup</button>
            </div>
            <div className='servicesresponsive'>
                <button className='buttontext' onClick={opensignin} id='buttonsignin'>Login</button>
            </div>
        </div>
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
      <div className='centerdivmobile'>
      <div className='imageroomsdivmobile'>
       
       <img src={'./Hotel_Image.webp'} className='imagerooms'></img>
       </div>
        <div className='contentdivmobile'>Make yourself at home in <span className='spantag'>Our</span> <br/>hotel.
        <div id='spancontent'>Simple -Unique -Friendly</div>
        <div>
            
         
        </div>
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
