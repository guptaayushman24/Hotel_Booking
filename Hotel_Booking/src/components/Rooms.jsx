import React, { useState, useRef, useEffect } from 'react'
import Calendar from "react-calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Rooms.css'
function Rooms() {
  const [selectedValue, SetselectedValue] = useState('');
  // Checkin
  const [date, setDate] = useState(null);
  const [showcalendar, setshowcalendar] = useState(false);
  const [calendarstate, setCalendarState] = useState(false);

  // Checkout
  const [datecheckout, setDatecheckout] = useState(null);
  const [showcalendarcheckout, setshowcalendarcheckout] = useState(false);
  const changeValue = (selectedDate) => {
    setDate(selectedDate);      // Set the selected date

    setCalendarState(false);    // Close the calendar

  };
  const changeValuecheckout = (selectedDate) => {

    setDatecheckout(selectedDate);      // Set the selected date

    setshowcalendarcheckout(false);    // Close the calendar

  };
  function toggle() {
    console.log("Hello");
    setshowcalendar(!showcalendar);
  }
  function togglecheckout() {
    console.log("Hello");
    setshowcalendarcheckout(!showcalendarcheckout);
  }






  return (

    <div className='parentdiv'>
      <div className='navbar'>
        <div className='navbar-start'>

          <div className='logo'>
            <img src='/Hotel_Logo.png'></img>
          </div>
          <div className='rooms'>
            Rooms
          </div>
          <div className='orderhistpry'>
            Order History
          </div>

        </div>
        <div className='navbar-end'>
          <div className='customerProfile'>
            Hello Alice
          </div>


        </div>
      </div>
      <div className='searchdiv'>
        <div className='city'>
          <div className='city-div'>
            <div className='city-div1'>
              Select City
            </div>
            <div className='city-div2'>
              <select className='custom-select' value={selectedValue} onChange={(e) => SetselectedValue(e.target.value)}>
                <option></option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="Bangkok">Bangkok</option>
              </select>
            </div>
          </div>
          <div className='cityname'>Selected City:-{selectedValue}</div>
        </div>
        {/* Check-indate*/}
        <div className='checkinparent'>
          <div className='checkin'>

            <div className='checkindiv1'>
              Check-IN
            </div>
            <div className='checkindivicon'>
              <button className='togglebtn' onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></button>
              {
                showcalendar && (
                  <Calendar onChange={changeValue} value={date} />
                )
              }

            </div>
          </div>
          <div className='showdate'>
            Check-In Date:-  {date ? date.toDateString() : 'No date selected'}
          </div>
        </div>


        {/* Check-out date*/}
        <div className='checkinparent'>
          <div className='checkin'>

            <div className='checkindiv1'>
              Check-OUT
            </div>
            <div className='checkindivicon'>
              <button className='togglebtn' onClick={togglecheckout}><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></button>
              {
                showcalendarcheckout && (
                  <Calendar onChange={changeValuecheckout} value={datecheckout} />
                )
              }

            </div>
          </div>
          <div className='showdate'>
            Check-OUT Date:-  {datecheckout ? datecheckout.toDateString() : 'No date selected'}
          </div>
        </div>
        <div className='search'>
          <button className='btn'>Search</button>
        </div>
      </div>
      <div>

      </div>
    </div>

  )
}

export default Rooms


// <FontAwesomeIcon icon="fa-solid fa-caret-down" />