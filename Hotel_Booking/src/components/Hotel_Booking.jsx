import React, { useContext, useDeferredValue, useEffect, useState } from 'react'
import './Hotel_Booking.css'
import { UserContext } from '../Context/Context'
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Hotel_Booking() {
    const data = useContext(UserContext);
    // const navigate = useNavigate();
    console.log(data);

    // Post the data in the Order History of the user
    async function orderhistory() {
        try {
            const response = await axios.post('http://localhost:5000/orderhistory', {
                HotelName: data.hotelname,
                Price: data.hotelprice,
                UserName: data.username,

                Email: data.useremail,
                CheckinDate: data.date?data.date:data.checkinmobile,
                CheckoutDate: data.checkoutdate?data.checkoutdate:data.checkoutmobile
            })
            if (response.status == 200) {
                navigate('/orderhistory');
            }
        }
        catch (err) {
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
        console.log("The context is",data);

    })
    let price = data.hotelprice;
    console.log("The price is ", typeof (Number(price)));
    const makePayment = async token => {
        const body = {
            token,
            product,
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
            if (status == 200) {
                orderhistory();
            }
        } catch (err) {
            return console.log(err);
        }
    }

    return (
        <div>
            <div className='parent'>
                <div className='bookingparent'>
                    <div className='imagediv'>
                        <img src={data.imageurl} alt="Hotel_Image" className='imageclass' />
                    </div>
                    <div className='detaildiv'>
                        <div className='hotelname'>
                            {data.hotelname}
                        </div>
                        <div className='hotelname'>
                             {data.hotelrating}
                        </div>

                        <div className='hotelname'>
                            Hotel Review :- {data.checkboxSelected?data.checkboxSelected:data.checkboxmobile || "You have not selected any facility"}
                        </div>
                        <div className='hotelname'>
                            CheckIn Date :- {data.date ? data.date.toDateString() : data.checkindatemobile.toString() || "No date"}
                        </div>
                        <div className='hotelname'>
                            CheckOut Date :- {data.checkoutdate ? data.checkoutdate.toDateString() : data.checkoutdatemobile.toString() || "No date"}
                        </div>
                    </div>

                </div>

                <div className='buttondiv'>
                    <StripeCheckout
                        stripeKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
                        token={makePayment}
                        name='Make Payment'
                        amount={(Number)(price)} // Multiply by 100 to convert to paise for INR
                    >
                        <button className='paynow'>Pay {price}</button>
                    </StripeCheckout>
                </div>
            </div>

        </div>
    )
}

export default Hotel_Booking
