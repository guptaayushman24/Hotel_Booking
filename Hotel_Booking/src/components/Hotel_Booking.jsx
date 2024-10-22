import React, { useContext, useDeferredValue ,useEffect} from 'react'
import './Hotel_Booking.css'
import { UserContext } from '../Context/Context'
function Hotel_Booking() {
    const data = useContext(UserContext);
    useEffect(()=>{
        console.log("Price in the hotel booking is",data.hotelprice);
        console.log("Name of the hotel is",data.hotelname);
        console.log("Rating of the hotel is ",data.hotelrating);
        console.log("Other Facility in hotel is",data.checkboxSelected);
    })
    return (
        <div>
            <div className='parentdiv'>
                <div className='hoteldetail'>
                    <div className='hotelnameandrating'>
                        <div className='hotelname'>
                            {data.hotelname}
                        </div>
                        <div className='rating'>
                            {data.hotelrating}
                        </div>
                    </div>
                    <div className='hotelimageandprice'>

                        <div className='hotelimage'>
                        <img src='./Hotel_Room.jpeg' className='roomimage' alt="Hotel room" />
                        </div>
                        <div className='priceandroomparent'>
                        <div className='hotelprice'>
                             {data.hotelprice}
                        </div>
                        <div className='roomtype'>
                           {data.checkboxSelected}
                        </div>
                        </div>
                    </div>

                    <div className='bookbuttondiv'>
                        <button className='bookbutton'>
                            Book Hotel
                        </button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Hotel_Booking
