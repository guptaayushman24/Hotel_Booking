import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import './OtherFacility.css'
import Rooms from "./Rooms";
import { UserContext } from '../Context/Context';
import { Navigate, useNavigate } from "react-router-dom";
function OtherFacility() {
    const navigate = useNavigate();
    const checkboxselected = useContext(UserContext)
    // const {setdisplayalldata} = useContext(UserContext);
    // console.log("The context data is",contextData);

    const [data, setData] = useState([]);  // Store the fetched data
    const [page, setPage] = useState(1);   // Store the current page number
    const [loading, setLoading] = useState(false);  // Add loading state
    const [error, setError] = useState(null);  // Error state


    const { sethotelprice } = useContext(UserContext);
    const { sethotelname } = useContext(UserContext);
    const { sethotelrating } = useContext(UserContext);


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
            // console.error("Error fetching data:", error?.response?.data || error.message);
            setError("Error fetching data");
            setLoading(false);
        }
    }


    // Use effect to fetch data when `checkboxselected` changes
    useEffect(() => {
        console.log("useEffect triggered for otherfacility:", checkboxselected);
        fetchAndActivate1();
    }, [checkboxselected]);  // Include `checkboxselected` in the dependency array

    const itemsPerPage = 5;  // Number of items to display per page
    const totalPages = Math.ceil(data.filterd_data?.length / itemsPerPage) || 1;

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    const bookhotel = (e) => {
        console.log("Div Clicked");
        const hotelprice = e.target.closest('.roomviewsparent').querySelector('.hotelcost').textContent;
        sethotelprice(hotelprice);
        // Hotel Price
        console.log(hotelprice);
        const hotelname = e.target.closest('.roomviewsparent').querySelector('.hotelname').textContent;
        sethotelname(hotelname);
        // Hotel Name
        console.log(hotelname);
        // Hotel Rating
        const hotelrating = e.target.closest('.roomviewsparent').querySelector('.hotelrating').textContent;
        sethotelrating(hotelrating);
        console.log(hotelrating);

        // These function is checking that CheckIn Date and CheckOut Date are selected and in the right order

        // Handling the checkin date and checkout date

        if (checkboxselected.checkoutdate == null && checkboxselected.date == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (checkboxselected.checkoutdate < checkboxselected.date) {
            alert("Check-out date cannot be earlier than check-in date");
        }
        else {
            navigate('/bookingpage');
        }


    };


    // Render data

    return (

        <div>

            <div>
                {data.filterd_data ? (
                    data.filterd_data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                        <div key={index} className='roomviewsparent' onClick={bookhotel}>

                            <div className='hotelimage'>
                                <img src={hotel.
                                    Hotel_Image_URLS} alt="Hotel_Image" className='imageclass' />

                            </div>


                            <div className="hotelinfo">
                                <div className='hotelname'>
                                    Hotel Name :- {hotel.HotelName}

                                </div>
                                <div className='hotellocation'>
                                    Location :- {hotel.
                                        Location
                                    }
                                </div>
                                <div className='hotelotherfacility'>
                                    Other Facility :- {hotel.OtherFacility}
                                </div>
                                <div className='hotelroomtype'>
                                    Room Type :- {hotel.RoomType}
                                </div>
                                <div className='hotelbedtype'>Bed Type :- {hotel.BedType}
                                </div>
                            </div>

                            <div className='hotelprice'>
                                <div className='hotelrating'>
                                    Hotel Rating :- {hotel.Rating}
                                </div>
                                <div className='hotelreviewscore'>
                                    Hotel Review :- {hotel.ReviewScore}
                                </div>
                                <div className='hotelcost'>
                                    Hotel Price :- {hotel.RoomPrice}
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