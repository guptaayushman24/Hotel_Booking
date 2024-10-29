import React, { useContext, useDeferredValue, useEffect, useState } from 'react'
import './Hotel_Booking.css'
import { UserContext } from '../Context/Context'
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios'
function Hotel_Booking() {
    const data = useContext(UserContext);
    console.log(data);

    // Post the data in the Order History of the user
    async function orderhistory(){
        try{
            await axios.post('http://localhost:5000/orderhistory',{
            HotelName:data.hotelname,
            Price:data.hotelprice,
            UserName:data.username,

            Email:data.useremail,
            CheckinDate:data.date,
            CheckoutDate:data.checkoutdate
           })
      }
      catch(err){
        console.log(err.message);
      }

    }
    const [product, setProduct] = useState({
        name: "React from FB",
        price: 10,
        productBy: "facebook",
    })
    useEffect(() => {
        console.log("Price in the hotel booking is", data.hotelprice);
        console.log("Name of the hotel is", data.hotelname);
        
        console.log("Rating of the hotel is ", data.hotelrating);
        console.log("Other Facility in hotel is", data.checkboxSelected);

    })
    let price = data.hotelprice;
    console.log("The price is ",typeof(Number(price)));
    const makePayment = async token => {
        const body = {
            token,
            product
        }
        const header = {
            "Content-Type": "application/json"
        }

        try {
            const response = await fetch('http://localhost:5000/payment', {
                method: "POST",
                header,
                body: JSON.stringify(body)
            });
            console.log(response);
            const { status } = response;
            console.log(status);
            if (status==200){
                orderhistory();
            }
        } catch (err) {
            return console.log(err);
        }
    }

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
                            <div className='roomtype'>
                                CheckIn Data:- {data.date ? data.date.toDateString():'No date'}
                            </div>
                            <div className='roomtype'>
                                CheckOut Data:- {data.checkoutdate ? data.checkoutdate.toDateString():'No date'}
                            </div>
                        </div>
                    </div>

                    <div className='bookbuttondiv'>
                            <StripeCheckout
                                stripeKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
                                token={makePayment}
                                name='Make Payment'
                                amount= {(Number)(price)} // Multiply by 100 to convert to paise for INR
                            >
                                <button className='bookbutton'>Book Hotel {price}</button>
                            </StripeCheckout>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hotel_Booking
