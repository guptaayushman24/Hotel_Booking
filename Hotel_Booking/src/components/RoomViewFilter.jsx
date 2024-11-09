import axios from "axios";
import "./RoomViewFilter.css"
import { UserContext } from '../Context/Context';
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function RoomViewFilter() {
    const navigate = useNavigate();
    // const view = useContext(UserContext);
    const roomviewcheckboxselected = useContext(UserContext);
    const roomviewfacility = useContext(UserContext);
    console.log("State of the room view state is", roomviewfacility, "Name of the roomviewfilter is", roomviewcheckboxselected);
    console.log("Type is", roomviewcheckboxselected.roomviewcheckboxselected);
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const { sethotelprice } = useContext(UserContext);
    const { sethotelname } = useContext(UserContext);

    const { sethotelrating } = useContext(UserContext);
    const {setimageurl} = useContext(UserContext);
    // Fetching data
    async function fetchdata() {
        try {

            setLoading(true);

            const res = await axios.post("http://localhost:5000/filterroomview", {
                RoomViews: roomviewcheckboxselected.roomviewcheckboxselected
            });
            console.log("API response in Room View is:", res?.data || "No data");
            console.log("Type of data is", typeof (data));
            console.log("Facility selected", roomviewcheckboxselected.roomviewcheckboxselected);
            console.log("Response us", res.data.filterd_data);

            if (res?.data) {
                setdata(res.data);
            }
            else {
                setdata([]);
            }
            setLoading(false);
        } catch (error) {
            console.log("Error fetching the data,", error?.response?.data || error.message);
        }
    }
    useEffect(() => {
        fetchdata();
        console.log("Name of the room view is");
        console.log("State of the room view us");

    }, [roomviewcheckboxselected]);

    // Pagination
    const itemsPerPage = 5;  // Number of items to display per page
    const totalPages = Math.ceil(data.filterd_data?.length / itemsPerPage) || 1;

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage);
        }
    };
    console.log('Rendered data in Room View Filter:', data);  // Check if data is rendering

    const bookhotel = (e,hotel_image_url) => {
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

        console.log(hotel_image_url);
        setimageurl(hotel_image_url);
        

        // These function is checking that CheckIn Date and CheckOut Date are selected and in the right order

        // Handling the checkin date and checkout date

        if (roomviewcheckboxselected.checkoutdate == null && roomviewcheckboxselected.date == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (roomviewcheckboxselected.checkoutdate < roomviewcheckboxselected.date) {
            alert("Check-out date cannot be earlier than check-in date");
        }
        else {
            navigate('/bookingpage');
        }


    };


    return (

        <div>

            <div>
                {data.filterd_data ? (
                    data.filterd_data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                        <div key={index} className='roomviewsparent' onClick={(e)=>bookhotel(e,hotel.Hotel_Image_URLS)}>
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
                    <p>loading ....</p>
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
export default RoomViewFilter;