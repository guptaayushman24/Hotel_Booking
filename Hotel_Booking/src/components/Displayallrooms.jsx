import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import axios from 'axios';
const Displayallrooms = () => {
    const [hoteldata, sethoteldata] = useState([]);
    const [page,setPage] = useState(1);
    async function fetchhoteldata() {

        try {
          const data = await axios.get('http://localhost:5000/getalldata');
          sethoteldata(data);
        }
        catch (err) {
       
            console.log(err); 
        }
    }
     
    useEffect(() => {
        fetchhoteldata();
        console.log(data);
        console.log("Hello display rooms")
        console.log("All the data is",hoteldata);
      }, [])

        // Creating the function for the pagination
  const selectPageHandler = (selectedPage) => {
    const totalPages = Math.ceil(hoteldata.data.length / 5); // Assuming 5 items per page

    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
  }
    
  return (
    <div>
      <div className='child2'>
          {hoteldata.data ?(
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
                    <span className='title'>Other Facilty: </span>
                    <span className='sub-title'>{hotel.OtherFacility}</span>
                  </div>

                  <div className='roomdetail'>
                    <span className='title'>Room View: </span>
                    <span className='sub-title'>{hotel.RoomViews}</span>
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
          ) :

            (
              <p>Loading ....</p>
            )}
        </div>
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
    </div>

  )
}

export default Displayallrooms
