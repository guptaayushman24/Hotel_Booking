import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
import Calendar from "react-calendar";
function CheckinCheckout() {
    // Checkin
    const [showcalendarcheckin, setShowCalendarCheckin] = useState(false); // Updated state variable
    const [datecheckin, setDateCheckin] = useState(''); // Updated state variable

    function togglecheckin() {
        setShowCalendarCheckin(!showcalendarcheckin); // Updated variable
    }

    const changeValue = (selectedDate) => {
        setDateCheckin(selectedDate.toLocaleDateString()); // Updated function to set datecheckin
        setShowCalendarCheckin(false); // Close the calendar
    };
    // Checkout
    const [showcalendarcheckout, setShowCalendarCheckout] = useState(false); // Updated state variable
    const [datecheckout, setDateCheckout] = useState(''); // Updated state variable

    function togglecheckout() {
        setShowCalendarCheckout(!showcalendarcheckout); // Updated variable
    }

    const changeValuecheckout = (selectedDate) => {
        setDateCheckout(selectedDate.toLocaleDateString()); // Updated function to set datecheckin
        setShowCalendarCheckout(false); // Close the calendar
    };
    return (

        <div>
            <div className='' style={{backgroundColor:'red'}}>
                <div className=''>
                    Select City
                </div>
                <div className=''>
                    <select>
                        <option></option>
                        <option value="USA">United States</option>

                        <option value="Canada">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Bangkok">Bangkok</option>
                    </select>
                </div>

             
               
                <div className=''>
                    <div className=''>
                        <div>Checkin <FontAwesomeIcon icon={faCalendar} onClick={togglecheckin} /></div>
                        {showcalendarcheckin && (
                            <Calendar onChange={changeValue} value={datecheckin ? new Date(datecheckin) : null} />
                        )}
                    </div>
                    <div>{datecheckin}</div> {/* Updated to display datecheckin */}
                </div>


                <div className=''>
                    <div className=''>
                        <div>Checkout <FontAwesomeIcon icon={faCalendar} onClick={togglecheckout} /></div>
                        {showcalendarcheckout && (
                            <Calendar onChange={changeValuecheckout} value={datecheckout ? new Date(datecheckout) : null} />
                        )}
                    </div>
                    <div>{datecheckout}</div> {/* Updated to display datecheckin */}
                </div>

            </div>

        </div>
    )
}

export default CheckinCheckout
