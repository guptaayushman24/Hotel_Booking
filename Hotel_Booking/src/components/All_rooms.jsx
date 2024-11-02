import { useEffect, useState,useContext } from "react";
import axios from 'axios';  // Ensure axios is imported
import './All_rooms.css';
import { UserContext } from "../Context/Context";
import { useNavigate } from 'react-router-dom';
function Allrooms() {
  const [hoteldata, sethoteldata] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const {sethotelprice} = useContext(UserContext);
  const {sethotelname} = useContext(UserContext);
  const {sethotelrating} = useContext(UserContext);
  const navigate = useNavigate();
  // Fetching data
  async function fetchhoteldata() {
    try {
      const data = await axios.get('http://localhost:5000/getalldata');
      console.log("Data is", data);
    
      sethoteldata(data.data);
    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    fetchhoteldata();
  }, []);

  useEffect(() => {
    console.log("Hotel data is", typeof(hoteldata));
  }, [hoteldata]);

  const selectPageHandler = (selectedPage) => {
    const totalPages = Math.ceil(hoteldata.data.length / 5); // Assuming 5 items per page
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  // Storing the checkin and checkout date
  const data = useContext(UserContext);


  const bookhotel = (e) => {
    console.log("Div Clicked");
    const hotelprice = e.target.closest('.roomviewsparent').querySelector('.roomprice-1').textContent;
    sethotelprice(hotelprice);
    // Hotel Price
    console.log(hotelprice);
    const hotelname = e.target.closest('.roomviewsparent').querySelector('.sub-title').textContent;
    sethotelname(hotelname);
    // Hotel Name
    console.log(hotelname);
    // Hotel Rating
    const hotelrating = e.target.closest('.roomviewsparent').querySelector('.rating').textContent;
    sethotelrating(hotelrating);
    console.log(hotelrating);

    
    
     // Handling the checkin date and checkout date

        if (data.checkoutdate==null && data.date==null){
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (data.checkoutdate<data.date){
          alert("Check-out date cannot be earlier than check-in date");
        }
        else{
           navigate('/bookingpage');
        }
    

  };

  return (
    
    <div style={{ backgroundColor: 'orange' }}>

    <div>
        {hoteldata.data ? (
            hoteldata.data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                <div key={index} className='roomviewsparent'  id={`hotel-${index}`} onClick={bookhotel}>
                    <img src='./Hotel_Room.jpeg' className='roomimage' alt="Hotel room" />

                    <div className=''>
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
                            <span className='sub-title' id="otherfacility">{hotel.OtherFacility}</span>
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
        ) : (
            <p>Loading ....</p>
        )}
    </div>

    <div className='paginationparent'>
        <div className='pagination'>
            <span onClick={() => selectPageHandler(page - 1)}>&lt;</span>
            {
                hoteldata.data && hoteldata.data.length > 0 ? (
                    Array.from({ length: Math.ceil(hoteldata.data.length / itemsPerPage) }).map((_, i) => {
                        return (
                            <span
                                className={page === i + 1 ? "pagination_selected" : ""}
                                onClick={() => selectPageHandler(i + 1)}
                                key={i}
                            >
                                {i + 1}
                            </span>
                        );
                    })
                ) : (
                    <p>No Data to Paginate</p> // This helps detect if the array is empty
                )
            }
            <span onClick={() => selectPageHandler(page + 1)}>&gt;</span>
        </div>
    </div>

</div>
    )
}

export default Allrooms;
