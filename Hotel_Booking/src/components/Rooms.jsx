import React, { useState, useRef, useEffect ,createContext,useContext} from 'react'
import Calendar from "react-calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from 'primereact/slider';
import axios from 'axios';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Rooms.css'
import Filter_data from './Filter_Data'
import { CheckboxContext } from './Context';
function Rooms() {
  // Function for fetching the hotel data
  const [hoteldata, sethoteldata] = useState([]);
  const [excellentchecked,setexcellentchecked] = useState(false);
  
 
  const [checkboxselected,setcheckboxselected] = useState('');

  const [filterexcellentchecked,setfilterexcellentchecked] = useState(false);
  const [goodfilter,setgoodfilter] = useState(false); 
  const [verygoodfilter,setverygoodfilter] = useState(false);
  const [wonderfulfilter,setwonderfilter] = useState(false);
 

  async function fetchhoteldata() {
    
    try {
   
      const data = await axios.get('http://localhost:5000/getalldata');
      sethoteldata(data.data);

     
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchhoteldata();
  }, [])
  // Creating state for the pagination
  const [page, setPage] = useState(1);

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



  
  // Handling the checkbox event
  const [checkboxes, setCheckboxes] = useState([
    // {id:0,label:'No Filter',checked:false},
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

    //Handling the Excellent Condition
    if (id === 1 && currentCheckbox.checked) {
      setcheckboxselected(checkboxes[id-1].label);  // This updates the selected filter label
      setfilterexcellentchecked(!filterexcellentchecked);
    }
    if (id===1 && !currentCheckbox.checked){
      setcheckboxselected('');
      setfilterexcellentchecked(!filterexcellentchecked);
    }
    
    // Handling the Good Condition
     if (id===2 && currentCheckbox.checked){
        setcheckboxselected(checkboxes[id-1].label);
        setfilterexcellentchecked(!filterexcellentchecked);
        setgoodfilter(!goodfilter);
    }
    if (id===2 && !currentCheckbox.checked){
      setcheckboxselected('');
      setfilterexcellentchecked(!filterexcellentchecked);
      setgoodfilter(!goodfilter);
    }


      // Handling the Very Good Condition
      if (id===3 && currentCheckbox.checked){
        setcheckboxselected(checkboxes[id-1].label);
        setfilterexcellentchecked(!filterexcellentchecked);
        setgoodfilter(!goodfilter);
        setverygoodfilter(!verygoodfilter);
      }
      if (id===3 && !currentCheckbox.checked){
        setcheckboxselected('');
        setfilterexcellentchecked(!filterexcellentchecked);
        setgoodfilter(!goodfilter);
        setverygoodfilter(!verygoodfilter);
      }

      // Handling the Wonderful Condition
      if (id===4 && currentCheckbox.checked){
        setcheckboxselected(checkboxes[id-1].label);
        setfilterexcellentchecked(!filterexcellentchecked);
        setgoodfilter(!goodfilter);
        setverygoodfilter(!verygoodfilter);
      }
      if (id===4 && !currentCheckbox.checked){
        setcheckboxselected('');
        setfilterexcellentchecked(!filterexcellentchecked);
        setgoodfilter(!goodfilter);
        setverygoodfilter(!verygoodfilter);
      }


    
    // Update the state with the new array
    setCheckboxes(newCheckboxes);

   
    
  }

  useEffect(() => {
    console.log("Excellent checked state:", filterexcellentchecked);
  }, [checkboxselected,checkboxes]);
 



  

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

  // Creating the function for the pagination
  const selectPageHandler = (selectedPage) => {
    const totalPages = Math.ceil(hoteldata.data.length / 5); // Assuming 5 items per page

    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
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
          <button className='btn' onClick={fetchhoteldata}>Search</button>
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
                {
                  value == null ? (
                    <p className='ratingfont'>Selected Rating:- Drag Slider</p>
                  ) : (
                    <p className='ratingfont'>Selected Rating:- {value}</p>
                  )
                }
                <Slider value={value} onChange={(e) => setValue(e.value)} min={0} max={10} step={0.5} />

              </div>
              <div className='reviewScore'>
                Review Score
              </div>

              <div className='chackbox-parent'>



                {checkboxes.map((checkbox) => (
                  <div key={checkbox.id} className='checkbox-container'>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label>{checkbox.label}</label>
                  </div>
                ))}


                <div className='otherfacility'>
                  Other Facility
                </div>
                <div className='checkbox-parent'>
                  {/* Spa */}
                  <div className='checkbox-container'>
                    <div className='checkbox'>
                      <input type='checkbox' checked={checked} onChange={handleChange} />
                    </div>
                    <div className='reviewtext'>
                      Spa
                    </div>

                  </div>

                </div>
                {/* Swimming Pool */}
                <div className='checkbox-container'>
                  <div className='checkbox'>
                    <input type='checkbox' checked={checked} onChange={handleChange} />
                  </div>
                  <div className='reviewtext'>
                    Swimming Pool
                  </div>

                </div>
                {/* Wifi*/}
                <div className='checkbox-container'>
                  <div className='checkbox'>
                    <input type='checkbox' checked={checked} onChange={handleChange} />
                  </div>
                  <div className='reviewtext'>
                    Wifi
                  </div>

                </div>

                <div className='roomviews'>
                  Room Views
                </div>
                {/* City View*/}
                <div className='checkbox-container'>
                  <div className='checkbox'>
                    <input type='checkbox' checked={checked} onChange={handleChange} />
                  </div>
                  <div className='reviewtext'>
                    City View
                  </div>

                </div>


                {/* Garden View */}
                <div className='checkbox-container'>
                  <div className='checkbox'>
                    <input type='checkbox' checked={checked} onChange={handleChange} />
                  </div>
                  <div className='reviewtext'>
                    Garden View
                  </div>

                  {/* Pool View */}
                </div>
                <div className='checkbox-container'>
                  <div className='checkbox'>
                    <input type='checkbox' checked={checked} onChange={handleChange} />
                  </div>
                  <div className='reviewtext'>
                    Pool View
                  </div>

                </div>

                {/* Sea View*/}
                <div className='checkbox-container'>
                  <div className='checkbox'>
                    <input type='checkbox' checked={checked} onChange={handleChange} />
                  </div>
                  <div className='reviewtext'>
                    Sea View
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='child2'>
          {hoteldata.data && !filterexcellentchecked   ? (
            hoteldata.data.slice(page * 5 - 5, page * 5).map((hotel, index) => (
              <div key={index} className='roomviewsparent'>
                <img src='./Hotel_Room.jpeg' className='roomimage' alt="Hotel room" />

                <div className='roomdetailparent'>
                  <div className='roomdetail'>
                    <span className='title'>Hotel Name: </span>
                    <span className='sub-title'>{hotel.HotelName}</span>
                  </div>
                  <div className='roomdetail'>
                    <span className='title'>Location: </span>
                    <span className='sub-title'>{hotel.Location}</span>
                  </div>
                  <div className='roomdetail'>
                    <span className='title'>Room Type: </span>
                    <span className='sub-title'>{hotel.RoomType}</span>
                  </div>
                  <div className='roomdetail'>
                    <span className='title'>Bed Type: </span>
                    <span className='sub-title'>{hotel.BedType}</span>
                  </div>
                </div>

                <div className='roompriceparent'>
                  <div className='roomprice'>
                    <div className='reviewscore'>
                      {hotel.ReviewScore}
                    </div>
                    <div className='rating'>
                      {hotel.Rating}
                    </div>
                  </div>
                  <div className='roomprice-1'>
                    Rs. {hotel.RoomPrice}
                  </div>
                </div>
              </div>
            ))
          ) : filterexcellentchecked ? (
             <Filter_data checkboxselected ={checkboxselected}/>
          ):goodfilter ?(
            <Filter_data checkboxselected={checkboxselected}></Filter_data>
          ):verygoodfilter ?(
            <Filter_data checkboxselected={checkboxselected}></Filter_data>
          ):wonderfulfilter?(
            <Filter_data checkboxselected={checkboxselected}></Filter_data>
          )
            :(
            <p>Loading ....</p>
          )}
        </div>


      </div>

      <div>
      </div>

      {
        !excellentchecked && !filterexcellentchecked &&(
          <div className='paginationparent'>
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