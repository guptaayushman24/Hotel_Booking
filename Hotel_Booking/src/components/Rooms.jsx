import React, { useState, useRef, useEffect } from 'react'
import Calendar from "react-calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from 'primereact/slider';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
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


  // Slider State
  const [value, setValue] = useState(null);
  // Checbox for the review score
  const [checked, setChecked] = React.useState(false);

  const changeValue = (selectedDate) => {
    setDate(selectedDate);      // Set the selected date

    setCalendarState(false);    // Close the calendar

  };

  // Handing the check box functionality
  function handleChange() {
    setChecked(!checked);
  }

  const changeValuecheckout = (selectedDate) => {

    setDatecheckout(selectedDate);      // Set the selected date

    setshowcalendarcheckout(false);    // Close the calendar

  };
  function toggle() {
    console.log("Hello");
    setshowcalendar(!showcalendar);
  }
  function togglecheckout() {
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
      <div className='parent1'>
        <div className='child1'>
          <div className='filters'>
            <div className='filter-heading'>
              <h2 className='filter-heading-text'>Selet Filters</h2>
            </div>
            <div className='filter'>
              <h2 className='filter-heading-text'>Suggested For You</h2>
            </div>
            {/* Rating div */}
            <div className='selectRating'>
              Select Rating
              <div className='slider'>
                <p className='ratingfont'>Selected Rating:- {value}</p>
                <Slider value={value} onChange={(e) => setValue(e.value)} min={0} max={10} step={0.5} />

              </div>
              <div className='reviewScore'>
                Review Score
              </div>

              <div className='chackbox-parent'>
                {/* Excellent */}
               <div className='checkbox-container'>
                <div className='checkbox'>
                  <input type='checkbox' checked={checked} onChange={handleChange} />
                </div>
                <div className='reviewtext'>
                  Excellent
                </div>
                
              </div> 
                {/* Good */}
              <div className='checkbox-container'>
                <div className='checkbox'>
                  <input type='checkbox' checked={checked} onChange={handleChange} />
                </div>
                <div className='reviewtext'>
                  Good
                </div>
                
              </div> 
                {/* Very Good */}
              <div className='checkbox-container'>
                <div className='checkbox'>
                  <input type='checkbox' checked={checked} onChange={handleChange} />
                </div>
                <div className='reviewtext'>
                  Very Good
                </div>
                
              </div>
               {/* Wonderful */} 
              <div className='checkbox-container'>
                <div className='checkbox'>
                  <input type='checkbox' checked={checked} onChange={handleChange} />
                </div>
                <div className='reviewtext'>
                  Wonderful
                </div>
                
              </div> 
              </div>
              {/* <div className='checkbox-container'>
                <div className='checkbox'>
                  <input type='checkbox' checked={checked} onChange={handleChange} />
                </div>
                <div className='reviewtext'>
                  Excellent
                </div>
                
              </div> */}
              
            </div>
          </div>
        </div>
        <div className='child2'>
          Hello2

        </div>
      </div>

      <div>


      </div>

    </div>

  )
}

export default Rooms


