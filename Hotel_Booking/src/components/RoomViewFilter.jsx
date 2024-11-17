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

            const res = await axios.post("https://hotel-booking-1lqf.onrender.com/filterroomview", {
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

        if (roomviewfacility.checkoutdate == null && roomviewfacility.date == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (roomviewfacility.checkoutdate < roomviewfacility.date) {
            alert("Check-out date cannot be earlier than check-in date");
        }
        else {
            navigate('/bookingpage');
        }


    };

    const bookhotelmobile = (e,hotel_image_url)=>{
        console.log("Mobile div clicked");
        // Hotel Price
        const hotelprice = e.target.closest('.mobileviewparent').querySelector('#hotelpricemobile').textContent;
        sethotelprice(hotelprice);
        console.log("Hotel Price mobile is",hotelprice);

        // Hotel Name
        const hotelname = e.target.closest('.mobileviewparent').querySelector('#hotelnamemobile').textContent;
        sethotelname(hotelname);
        console.log(hotelname);

        // Hotel Rating
        const hotelrating = e.target.closest('.mobileviewparent').querySelector('#hotelratingmobile').textContent;
        sethotelrating(hotelrating);
        console.log(hotelrating);

        // Hotel Image
        setimageurl(hotel_image_url);
        console.log(hotel_image_url);

        if (roomviewfacility.checkoutdatemobile == null && roomviewfacility.checkindatemobile == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (roomviewfacility.checkoutdatemobile < roomviewfacility.checkindatemobile) {
            alert("Check-out date cannot be earlier than check-in date");
        }
        else {
            navigate('/bookingpage');
        }
        
    }



    return (

        <div>

<div>
                {data.filterd_data ? (
                    data.filterd_data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                        <div key={index}>

                            {/* Desktop View */}
                            <div className='roomviewsparent' id={`hotel-${index}`} onClick={(e) => bookhotel(e, hotel.Hotel_Image_URLS)}>
                                <div className='hotelimage'>
                                    <img src={hotel.Hotel_Image_URLS} alt="Hotel_Image" className='imageclass' />
                                </div>

                                <div className="hotelinfo">
                                    <div className='hotelname'>
                                        Hotel Name :- {hotel.HotelName}
                                    </div>
                                    <div className='hotellocation'>
                                        Location :- {hotel.Location}
                                    </div>
                                    <div className='hotelotherfacility'>
                                        Other Facility :- {hotel.OtherFacility}
                                    </div>
                                    <div className='hotelroomtype'>
                                        Room Type :- {hotel.RoomType}
                                    </div>
                                    <div className='hotelbedtype'>
                                        Bed Type :- {hotel.BedType}
                                    </div>
                                </div>

                                <div className='hotelprice'>
                                    <div className='hotelrating'>
                                        Hotel Rating :- {hotel.Rating}
                                    </div>
                                    <div className='hotelrating'>
                                        Room View :- {hotel.RoomViews}
                                    </div>
                                    <div className='hotelreviewscore'>
                                        Hotel Review :- {hotel.ReviewScore}
                                    </div>
                                    <div className='hotelcost'>
                                        Hotel Price :- {hotel.RoomPrice}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile View */}
                            
                         
                            <div className='mobileviewparent' onClick={(e)=>bookhotelmobile(e,hotel.Hotel_Image_URLS)}>
                                <div className='mobilehotelimage'>
                                    <img src={hotel.Hotel_Image_URLS} alt="Hotel_Image" className='mobilehotelimage' />
                                </div>
                                <div className='mobilehotelname' id="hotelnamemobile">
                                    HotelName :- {hotel.HotelName}
                                </div>
                                <div className='mobilehotelname' id='hotelnamelocationmobile'>
                                    Location :- {hotel.Location}
                                </div>
                                <div className='mobilehotelname' id="hotelotherfacilitymobile">
                                    Other Facility :- {hotel.OtherFacility}
                                </div>
                                <div className='mobilehotelname' id="hotelroomtypemobile">
                                    Room Type :- {hotel.RoomType}
                                </div>
                                <div className='mobilehotelname' id="hotelratingmobile">
                                    Hotel Rating :- {hotel.Rating}
                                </div>
                                <div className='mobilehotelname' id="hotelratingreviewmobile">
                                    Room View :- {hotel.RoomViews}
                                </div>
                                <div className='mobilehotelname' id="hotelreviewmobile">
                                    Hotel Review :- {hotel.ReviewScore}
                                </div>
                                <div className='mobilehotelname' id="hotelpricemobile">
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
export default RoomViewFilter;