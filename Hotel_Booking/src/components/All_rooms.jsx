import { useEffect, useState, useContext } from "react";
import axios from 'axios';  // Ensure axios is imported
import { UserContext } from "../Context/Context";
import { useNavigate } from 'react-router-dom';
import './All_rooms.css';
function Allrooms() {
    const [hoteldata, sethoteldata] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const { sethotelprice } = useContext(UserContext);
    const { sethotelname } = useContext(UserContext);
    const { sethotelrating } = useContext(UserContext);
    const { setimageurl } = useContext(UserContext);
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
        console.log("Hotel data is", typeof (hoteldata));
    }, [hoteldata]);

    const selectPageHandler = (selectedPage) => {
        const totalPages = Math.ceil(hoteldata.data.length / 5); // Assuming 5 items per page
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    // Storing the checkin and checkout date
    const data = useContext(UserContext);

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

        if (data.checkoutdate == null && data.date == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (data.checkoutdate < data.date) {
            alert("Check-out date cannot be earlier than check-in date");
        }
        else {
            navigate('/bookingpage');
        }


    };



    return (

        <div>

            <div>
                {hoteldata.data ? (
                    hoteldata.data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                        <div key={index} className='roomviewsparent' id={`hotel-${index}`} onClick={(e) => bookhotel(e, hotel.Hotel_Image_URLS)}>

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
