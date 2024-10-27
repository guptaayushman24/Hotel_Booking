import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import './OtherFacility.css';
import Rooms from "./Rooms";
import { UserContext } from '../Context/Context';
import { Navigate, useNavigate } from "react-router-dom";
function OtherFacility() {
    const navigate = useNavigate();
    const checkboxselected = useContext(UserContext)
    // console.log("The context data is",contextData);

    const [data, setData] = useState([]);  // Store the fetched data
    const [page, setPage] = useState(1);   // Store the current page number
    const [loading, setLoading] = useState(false);  // Add loading state
    const [error, setError] = useState(null);  // Error state

    
    const {sethotelprice} = useContext(UserContext);
    const {sethotelname} = useContext(UserContext);
    const {sethotelrating} = useContext(UserContext);
   

    // Fetch data when component mounts or checkboxselected changes

    
    async function fetchAndActivate1() {
        try {
            setLoading(true);

            const res = await axios.post("http://localhost:5000/otherfacility", {
                OtherFacility: checkboxselected.checkboxSelected// Ensure `checkboxselected` is valid
            });
            console.log("API Response in other facility:", res?.data || "No data"); // Handle missing data
            if (res?.data) {
                setData(res.data); // Set the fetched data in state
               
            } else {
                setData([]); // Clear data if response is empty
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error?.response?.data || error.message);
            setError("Error fetching data");
            setLoading(false);
        }
    }
    

    // Use effect to fetch data when `checkboxselected` changes
    useEffect(() => {
        console.log("useEffect triggered for otherfacility:", checkboxselected);
        // alert("Other Facility component is called");
        fetchAndActivate1();
    }, [checkboxselected]);  // Include `checkboxselected` in the dependency array

    const itemsPerPage = 5;  // Number of items to display per page
    const totalPages = Math.ceil(data.filterd_data?.length / itemsPerPage) || 1;

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    function bookhotel(e){
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

        navigate('/bookingpage');
    }

    // Render data

    return (

        <div style={{ backgroundColor: 'orange' }}>

            <div>
                {data.filterd_data ? (
                    data.filterd_data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                        <div key={index} className='roomviewsparent' onClick={bookhotel}>
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
                        data.filterd_data && data.filterd_data.length > 0 ? (
                            Array.from({ length: Math.ceil(data.filterd_data.length / itemsPerPage) }).map((_, i) => {
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
export default OtherFacility;