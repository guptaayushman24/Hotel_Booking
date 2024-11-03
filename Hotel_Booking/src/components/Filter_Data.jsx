import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import { CheckboxContext } from "./Context";
import './Filter_Data.css'
import { UserContext } from "../Context/Context";
import { useNavigate } from 'react-router-dom';
function Filter_data({ checkboxselected }) {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1);
    const { sethotelprice } = useContext(UserContext);
    const { sethotelname } = useContext(UserContext);
    const { sethotelrating } = useContext(UserContext);
    const { sethotelotherfacility } = useContext(UserContext);
    // var columnname = {};
    console.log("The column name is", { checkboxselected });

    const contextdata = useContext(UserContext);
    function fetchAndActivate() {
        axios.post("http://localhost:5000/reviewscore", {
            ReviewScore: checkboxselected // If any how we pass the data here out lots of work can be simplified

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

        // These function is checking that CheckIn Date and CheckOut Date are selected and in the right order

         // Handling the checkin date and checkout date

         if (contextdata.checkoutdate==null && contextdata.date==null){
            alert("Please select the checkin and checkout date before booking")
        }
        // These else if is checking that CheckIn Date and CheckOut Date are selected and in the right order
        else if (contextdata.checkoutdate<contextdata.date){
          alert("Check-out date cannot be earlier than check-in date");
        }
        else{
           navigate('/bookingpage');
        }
        

    };



    return (

        <div>

            <div>
                {data.filterd_data ? (
                    data.filterd_data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
                        <div key={index} className='roomviewsparent' id={`hotel-${index}`} onClick={bookhotel}>
                        <img src={hotel.Hotel_Image_URLS} className="roomimage" alt="Hotel room"></img>

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



