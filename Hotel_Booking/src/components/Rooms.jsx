import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import Calendar from "react-calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from 'primereact/slider';
import Filter_data from './Filter_Data'
import { CheckboxContext } from './Context';
import OtherFacility from './OtherFacility';
import Newfile from './Newfile';
import Newcomponent from './Newcomponent';
import RoomsView from '../../Util/RoomsView';
import RoomViewFilter from './RoomViewFilter';

import { UserContext } from '../Context/Context';
import Allrooms from './All_rooms';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { faBars, faXmark, faUser,faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Rooms.css'
function Rooms() {
  const [sidenavigationstatus, setsidenavigationstatus] = useState(false);
  const [filterdiv, setfilterdiv] = useState(false);
  const showsidenavbar = useRef(null);
  const showfilterdiv = useRef(null);
  function opensidenavbar() {
    setsidenavigationstatus(!sidenavigationstatus);
    showsidenavbar.current.style.display = 'inline';
  }
  function closesidenavbar() {
    setsidenavigationstatus(!sidenavigationstatus);
    showsidenavbar.current.style.display = 'none';
  }

  function openfilterdiv() {
    showfilterdiv.current.style.display = 'inline';
    setfilterdiv(!filterdiv);
  }
  function closefilterdiv() {
    showfilterdiv.current.style.display = 'none';
    setfilterdiv(!filterdiv);
  }

  // Function for fetching the hotel data
  const navigate = useNavigate();
  const roomviewcheckboxselected = useContext(UserContext);
  const roomviewfacility = useContext(UserContext);




  const [hoteldata, sethoteldata] = useState([]);
  const [excellentchecked, setexcellentchecked] = useState(false);


  // Review Score
  const [checkboxselected, setcheckboxselected] = useState('');

  const [filterexcellentchecked, setfilterexcellentchecked] = useState(false);  // Push all the statements from 23 to 24 in useEffect
  const [goodfilter, setgoodfilter] = useState(false);
  const [verygoodfilter, setverygoodfilter] = useState(false);
  const [wonderfulfilter, setwonderfilter] = useState(false);

  const [displayalldata, setdisplayalldata] = useState(false);
  // const {setdisplayalldata} = useContext(UserContext);





  // Recieving the data from the NewComponent
  const [otherfacility, setotherfacility] = useState(false);
  const [checkboxdata, setcheckboxdata] = useState('');

  // Callback function
  const handleadatafromcomponent = (selecteddata) => {
    setotherfacility(selecteddata); // Set the received data
  };




  async function fetchhoteldata() {
    CompareDate();
    setdisplayalldata(true);

  }
  // Creating state for the pagination
  const [page, setPage] = useState(1);

  const [selectedValue, SetselectedValue] = useState('');
  // Checkin
  const { setdate } = useContext(UserContext);
  // Checkout
  const { setcheckoutdate } = useContext(UserContext);
  const [showcalendar, setshowcalendar] = useState(false);
  const [calendarstate, setCalendarState] = useState(false);

  // Checkout
  // const [datecheckout, setDatecheckout] = useState(null);
  const [showcalendarcheckout, setshowcalendarcheckout] = useState(false);



  // Slider State
  const [value, setValue] = useState(null);
  // Checbox for the review score
  const [checked, setChecked] = React.useState(false);

  // Setting the user who has done the login
  const data = useContext(UserContext);

  const {setCheckboxSelected} = useContext(UserContext);
  const {setcheckboxmobile} = useContext(UserContext);



  const changeValue = (selectedDate) => {
    setdate(selectedDate);      // Set the selected date

    setCalendarState(false);    // Close the calendar

  };

  // Handing the check box functionality
  function handleChange() {
    setChecked(!checked);
  }






  // Handling the checkbox event
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Excellent', checked: false },
    { id: 2, label: 'Good', checked: false },
    { id: 3, label: 'Very Good', checked: false },
    { id: 4, label: 'Wonderful', checked: false },
  ]);







  const handleCheckboxChange = (id) => {
    const newCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked } // Toggle the checked state
        : checkbox
    );



    // Find the currently toggled checkbox
    const currentCheckbox = newCheckboxes.find((checkbox) => checkbox.id === id);

    // Conditions for the Review Score

    //Handling the Excellent Condition
    if (id === 1 && currentCheckbox.checked) {
    //  setcheckboxselected(checkboxes[id - 1].label);  // This updates the selected filter label
      setCheckboxSelected(checkboxes[id - 1].label)
      setcheckboxmobile(checkboxes[id - 1].label)
      setfilterexcellentchecked(!filterexcellentchecked);
      setdisplayalldata(false);
    }
    if (id === 1 && !currentCheckbox.checked) {
      setcheckboxselected('');
      setfilterexcellentchecked(!filterexcellentchecked);
      setdisplayalldata(true);
    }

    // Handling the Good Condition
    if (id === 2 && currentCheckbox.checked) {
     // setcheckboxselected(checkboxes[id - 1].label);
      setCheckboxSelected(checkboxes[id - 1].label)
      setcheckboxmobile(checkboxes[id - 1].label)
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
      setdisplayalldata(false);
    }
    if (id === 2 && !currentCheckbox.checked) {
      setcheckboxselected('');
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
      setdisplayalldata(true);
    }


    // Handling the Very Good Condition
    if (id === 3 && currentCheckbox.checked) {
     // setcheckboxselected(checkboxes[id - 1].label);
      setCheckboxSelected(checkboxes[id - 1].label)
      setcheckboxmobile(checkboxes[id - 1].label)
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
      setverygoodfilter(!verygoodfilter);
      setdisplayalldata(false);
    }
    if (id === 3 && !currentCheckbox.checked) {
      setcheckboxselected('');
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
      setverygoodfilter(!verygoodfilter);
      setdisplayalldata(true);
    }

    // Handling the Wonderful Condition
    if (id === 4 && currentCheckbox.checked) {
     // setcheckboxselected(checkboxes[id - 1].label);
      setCheckboxSelected(checkboxes[id - 1].label)
      setcheckboxmobile(checkboxes[id - 1].label)
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
      setverygoodfilter(!verygoodfilter);
      setwonderfilter(!wonderfulfilter);
      setdisplayalldata(false);
    }
    if (id === 4 && !currentCheckbox.checked) {
     // setcheckboxselected('');
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
      setverygoodfilter(!verygoodfilter);
      setwonderfilter(!wonderfulfilter);
      setdisplayalldata(true);
    }
    // Update the state with the new array
    setCheckboxes(newCheckboxes);
  }



 









  useEffect(() => {
    console.log("Component renders")
    setdisplayalldata(true);
    console.log(displayalldata);
    if (roomviewfacility.checkboxSelected != '') {
      setdisplayalldata(false);
    }
    else if (roomviewfacility.roomviewcheckboxselected != '') {
      setdisplayalldata(false);
    }
    else {
      setdisplayalldata(true);
    }
  }, [roomviewfacility.checkboxSelected, roomviewfacility.roomviewcheckboxselected]);

  useEffect(() => {
  }, [hoteldata]); // Runs only when `hoteldata` updates
  useEffect(() => {
    console.log("Displaydata", displayalldata);
    console.log("filterexcellentchecked", filterexcellentchecked);
    console.log("goodfilter", goodfilter);
    console.log("verygoodfilter", verygoodfilter);
    console.log("otherfacility", otherfacility);
    console.log("wonderfulfilter", wonderfulfilter)
    console.log("roomviewfacility", roomviewfacility);

  }, [checkboxselected, checkboxes, otherfacility, checkboxdata, roomviewfacility]);


  const changeValuecheckout = (selectedDate) => {

    setcheckoutdate(selectedDate);      // Set the selected date

    setshowcalendarcheckout(false);    // Close the calendar

  };
  function toggle() {
    setshowcalendar(!showcalendar);
  }
  function togglecheckout() {
    setshowcalendarcheckout(!showcalendarcheckout);
  }

  // Creating the function for the pagination
  const selectPageHandler = (selectedPage) => {
    const totalPages = Math.ceil(hoteldata.data.length / 5); // Assuming 5 items per page

    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
  }

  // Handling the checkin date and checkout date

  function CompareDate() {
    if (roomviewfacility.checkoutdate < roomviewfacility.date) {
      alert("Check-out date cannot be earlier than check-in date");
      setdisplayalldata(false);
    }
    else {
      setdisplayalldata(true);
    }
  }
  
  // Checkin and Checkout for the mobile view
//  const [checkindatemobile,setcheckindatemobile] = useState('');
//  const [checkoutdatemobile,setcheckoutdatemobile] = useState('');
 const {setcheckindatemobile} = useContext(UserContext);
 const {setcheckoutdatemobile} = useContext(UserContext);
 let chooseCity = "Select City"

  // Navigating to the Order History Page
  function showorderhistory() {
    navigate('/orderhistory');
  }

  return (


    <div className='parentdiv'>

      <div className='parentnavbar'>
        <div className='navbar'>
          <div className='navbar-start'>

            <div className='logo'>
              <img src='/Hotel_Logo.png'></img>
            </div>
            <div className='rooms'>
              Rooms
            </div>
            <div className='orderhistpry' onClick={showorderhistory}>
              Order History
            </div>

          </div>
          <div className='navbar-end'>
            <div className='customerProfile'>
              Hello {data.username + " " + data.userlastname}
            </div>


          </div>
        </div>

      </div>
      <div className='mobileview'>
        {

          sidenavigationstatus ? (
            <FontAwesomeIcon icon={faXmark} onClick={closesidenavbar} className='icon' />
          ) : (
            <FontAwesomeIcon icon={faUser} onClick={opensidenavbar} className='icon' />

          )
        }
        <div className='sidenavigation' ref={showsidenavbar}>
          <div className='sidenavbaritems' >
            <div className='profile'>Hello</div>
            <div className='profileitem'>{roomviewcheckboxselected.username + " " + roomviewcheckboxselected.userlastname}</div>
            <div className='profileitem' onClick={showorderhistory}>Order History</div>
          </div>
        </div>
      </div>

      <div className='searchdivparent'>
        {/* <div className='dashicon' onClick={showfilter} ><FontAwesomeIcon icon={faBars} /></div> */}
        {

          filterdiv ? (
           <div className='dashicon' onClick={closefilterdiv}><FontAwesomeIcon icon={faXmark} onClick={closefilterdiv} className='icon' /></div>
          ) : (
            <div className='dashicon' onClick={openfilterdiv}><FontAwesomeIcon icon={faBars} onClick={closefilterdiv} className='icon' /></div>

          )
        }
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
                    <Calendar onChange={changeValue} value={roomviewfacility.date} />
                  )
                }

              </div>
            </div>
            <div className='showdate'>
              Check-In Date:-  {roomviewfacility.date ? roomviewfacility.date.toDateString() : 'No date selected'}
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
                    <Calendar onChange={changeValuecheckout} value={roomviewfacility.checkoutdate} />
                  )
                }

              </div>
            </div>
            <div className='showdate'>
              Check-OUT Date:-  {roomviewfacility.checkoutdate ? roomviewfacility.checkoutdate.toDateString() : 'No date selected'}
            </div>
          </div>
          <div className='search'>
            <button className='btn' onClick={fetchhoteldata}>Search</button>
          </div>

        </div>

      </div>

      <div className='parent1'>
      <div className='child1' ref={showfilterdiv}>
          <div className='filters'>
            <div className='filter-heading'>
              <h2 className='filter-heading-text'>Select Filters</h2>
            </div>
            <div className='filter'>
              <h2 className='filter-heading-text'>Suggested For You</h2>
            </div>
            {/* Rating div */}
            <div className='selectRating'>
              Select Rating
              <div className='slider'>
                {
                  value == null ? (
                    <p className='ratingfont'><p className='ratingfontpara'>Selected Rating:- Drag Slider</p></p>
                  ) : (
                    <p className='ratingfont'>Selected Rating:- {value}</p>
                  )
                }
                <Slider value={value} onChange={(e) => setValue(e.value)} min={0} max={10} step={0.5} />

              </div>
              <div className='reviewScore'>
                <p>Review Score</p>
              </div>

              <div className='chackbox-parent'>



                {checkboxes.map((checkbox) => (
                  <div key={checkbox.id} className='checkbox-container'>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label className='classlabel'>{checkbox.label}</label>
                  </div>
                ))

                }




                <div className='otherfacility1'>
                  Other Facility
                </div>

                <Newcomponent handleadatafromcomponent={handleadatafromcomponent} />




                <div className='roomviews'>
                  Room Views
                </div>

                {/* Rooms View checkbox component*/}
                <RoomsView></RoomsView>

              </div>
            </div>
          </div>
            <div className='checkincheckout'>
                <div className='selectcitymobile'>
                <select className='custom-select' value={selectedValue} onChange={(e) => SetselectedValue(e.target.value)}>
                <option>Select City</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="Bangkok">Bangkok</option>
              </select>
              <div className='citynamemobile'>Selected City:-{selectedValue?selectedValue:chooseCity}
            
              </div>
                </div>
                <div className='checkindatamobile'>

                <div className='checkindatamobile'>
                <div>CheckinDate:- <input type='date' onChange={(e)=>setcheckindatemobile(e.target.value)}></input></div>
                <div>CheckinDate:- {data.checkindatemobile?data.checkindatemobile:'Select Checkin Date'}</div>
                {/*Here Store the selected checkin date*/}
                </div>
                <div>CheckoutDate:- <input type='date' onChange={(e)=>setcheckoutdatemobile(e.target.value)}></input></div>
                <div>CheckoutDate:- {data.checkoutdatemobile?data.checkoutdatemobile:'Select Checkout Date'}</div>


                {/* Here Store the checkout date*/}
                </div>

                {/* Search Button*/}
                <div className='searchmobile'><button className='searchmobilebutton'>Search</button></div>

            </div>
        </div>
        <div className='child2'>
          {displayalldata ? (
            <Allrooms></Allrooms>
          ) :
            filterexcellentchecked ? (
              <Filter_data checkboxselected={checkboxselected} />
            ) : goodfilter ? (
              <Filter_data checkboxselected={checkboxselected}></Filter_data>
            ) : verygoodfilter ? (
              <Filter_data checkboxselected={checkboxselected}></Filter_data>
            ) : wonderfulfilter ? (
              <Filter_data checkboxselected={checkboxselected}></Filter_data>
            ) : otherfacility ? (
              <OtherFacility ></OtherFacility>
            ) : roomviewfacility ? (
              <RoomViewFilter></RoomViewFilter>
            ) :

              (
                <p>Loading ....</p>
              )}
        </div>


      </div>

      {
        !excellentchecked && !filterexcellentchecked && !otherfacility && !roomviewfacility && (
          <div className='paginationcontainer'>
            <div className='pagination'>
              <span onClick={() => selectPageHandler(page - 1)}>&lt;</span>
              {
                hoteldata && hoteldata.data && Array.from({ length: Math.ceil(hoteldata.data.length / 5) }).map((_, i) => {
                  return <span className={page === i + 1 ? "pagination_selected" : ""} onClick={() => selectPageHandler(i + 1)} key={i}>{i + 1}</span>;
                })
              }
              <span onClick={() => selectPageHandler(page + 1)}>&gt;</span>
            </div>

          </div>

        )


      }


    </div>



  )
}

export default Rooms