import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import { CheckboxContext } from "./Context";
import { UserContext } from "../Context/Context";
import { useNavigate } from 'react-router-dom';
import './FilterData.css'
function Filter_data({ checkboxselected }) {
    const navigate = useNavigate();
    const contextdata = useContext(UserContext);
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1);
    const { sethotelprice } = useContext(UserContext);
    const { sethotelname } = useContext(UserContext);
    const { sethotelrating } = useContext(UserContext);
    const { sethotelotherfacility } = useContext(UserContext);
    const { setimageurl } = useContext(UserContext);



    console.log("The column name is", { checkboxselected });
    const userfacility =  useContext(UserContext);


    function fetchAndActivate() {
        axios.post("http://localhost:5000/reviewscore", {
            ReviewScore: userfacility.checkboxSelected // If any how we pass the data here out lots of work can be simplified

        }).then((res) => {
            console.log("API Response:", res.data); // Log API response to check structure
            console.log(typeof res.data);
            setdata(res.data);  // Assuming `res.data.data` is correct, adjust if needed

        }).catch((error) => {

            console.error("Error fetching data:", error);


        });

    }

    // Log data whenever it changes
    useEffect(() => {
        fetchAndActivate();
    }, [checkboxselected]);

    const itemsPerPage = 5;  // Number of items to display per page
    const selectPageHandler = (selectedPage) => {
        const totalPages = Math.ceil(data.filterd_data.length / 5); // Assuming 5 items per page

        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage);
        }
    }

    const bookhotel = (e, hotel_image_url) => {
        console.log("Div Clicked");
        const hotelprice = e.target.closest('.roomviewsparent').querySelector('.hotelcost').textContent;
        sethotelprice(hotelprice);
        // Hotel Price
        console.log(hotelprice);
        const hotelname = e.target.closest('.roomviewsparent').querySelector('.hotelname').textContent;
        sethotelname(hotelname);
        // Hotel Name
        console.log("The desktop view hotel name is",hotelname);
        // Hotel Rating
        const hotelrating = e.target.closest('.roomviewsparent').querySelector('.hotelrating').textContent;
        sethotelrating(hotelrating);
        console.log(hotelrating);

        // Hotel Image
        console.log(hotel_image_url);
        setimageurl(hotel_image_url);

        // These function is checking that CheckIn Date and CheckOut Date are selected and in the right order

        // Handling the checkin date and checkout date

        if (contextdata.checkoutdate == null && contextdata.date == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (contextdata.checkoutdate < contextdata.date) {
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

        if (contextdata.checkoutdatemobile == null && contextdata.checkindatemobile == null) {
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (contextdata.checkoutdatemobile < contextdata.checkindatemobile) {
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
                                        Hotel Rating :- {hotel. ReviewScore}
                                           
                                    </div>
                                    <div className='hotelrating'>
                                        Hotel Rating :- {hotel.Rating}
                                    </div>
                                    <div className='hotelreviewscore'>
                                        Room View :- {hotel.RoomViews}
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

export default Filter_data;



