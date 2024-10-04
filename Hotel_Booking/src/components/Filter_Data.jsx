import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { CheckboxContext } from "./Context";
function Filter_data({checkboxselected}) {
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1);
    // var columnname = {};
    console.log("The column name is",{checkboxselected});
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
        console.log("Component Called");
    }, [checkboxselected]);

    const itemsPerPage = 5;  // Number of items to display per page
    const selectPageHandler = (selectedPage) => {
        const totalPages = Math.ceil(data.filterd_data.length / 5); // Assuming 5 items per page
    
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
          setPage(selectedPage);
        }
      }
    
    return (

        <div>

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



