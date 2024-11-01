import React from 'react'
import './Services.css'
function Services() {
  return (
    <div>
      <div className='hotelserviceparent'>
      <div className='roomheading'>Room Services Provided By Hotel</div>
        <div className='roomservice'>
          <div className='roomservicetxt'>Room Service</div>
        </div>
        
        <div className='roomservice'>
          <div className='roomservicetxt'>Swimming pool</div>
        </div>
        <div className='roomservice'>
          <div className='roomservicetxt'>Spa</div>
      
        </div>
        
        <div className='roomservice'>
          <div className='roomservicetxt'>Free Wifi</div>
        </div>
      </div>
    </div>
  )
}

export default Services
