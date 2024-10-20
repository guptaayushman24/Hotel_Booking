import axios from "axios";
import './RoomViewFilter.css'
import { UserContext } from '../Context/Context';
import { useContext, useEffect, useState } from "react";
function RoomViewFilter() {
    // const view = useContext(UserContext);
    const roomviewcheckboxselected = useContext(UserContext);
    const roomviewfacility = useContext(UserContext);
    console.log("State of the room view state is",roomviewfacility,"Name of the roomviewfilter is",roomviewcheckboxselected);
    console.log("Type is",roomviewcheckboxselected.roomviewcheckboxselected);
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [page,setPage] = useState(1);
    // Fetching data
    async function fetchdata() {
        try {
            
            setLoading(true);
          
            const res = await axios.post("http://localhost:5000/filterroomview", {
                RoomViews: roomviewcheckboxselected.roomviewcheckboxselected
            });
            console.log("API response in Room View is:", res?.data || "No data");
            console.log("Type of data is",typeof(data));
            console.log("Facility selected",roomviewcheckboxselected.roomviewcheckboxselected);
            console.log("Response us",res.data.filterd_data);
           
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


    return (

        <div style={{ backgroundColor: 'orange' }}>

            <div>
                {data.filterd_data ? (
                    data.filterd_data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((hotel, index) => (
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
                                    <span className='title'>Room Type: </span>
                                    <span className='sub-title'>{hotel.RoomType}</span>
                                </div>
                                <div className='roomdetail'>
                                    <span className='title'>Bed Type: </span>
                                    <span className='sub-title'>{hotel.BedType}</span>
                                </div>

                                <div className='roomdetail'>
                                    <span className='title'>Room View: </span>
                                    <span className='sub-title'>{hotel.RoomViews}</span>
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