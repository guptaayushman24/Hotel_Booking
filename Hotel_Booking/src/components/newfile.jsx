// import React, { useContext, useEffect, useState } from "react";
// import OtherFacility from "./OtherFacility";
// import { UserContext } from "./OtherFacility";

function Newfile({ checkboxdata }) {
//   const user = useContext(UserContext);
//   const data1 = "Hello component";
//   const [boolean, setboolean] = useState(false);
//   const [data, setData] = useState({
//     filterd_data: [
//       {
//         HotelName: "Hotel Paradise",
//         Location: "City Center",
//         RoomType: "Deluxe",
//         BedType: "King Size"
//       },
//       // You can add more hotel objects here for testing
//     ]
//   });
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     console.log("New file useEffect is running");
//   }, [checkboxdata]);

  return (
    <></>
//     <div>
//       <h1>{data1}</h1>
//       <div>
//         {user.filterd_data ? (
//           user.filterd_data
//             .slice((page - 1) * itemsPerPage, page * itemsPerPage)
//             .map((hotel, index) => (
//               <div key={index} className="roomviewsparent">
//                 <img
//                   src="./Hotel_Room.jpeg"
//                   className="roomimage"
//                   alt="Hotel room"
//                 />
//                 <div className="roomdetailparent">
//                   <div className="roomdetail">
//                     <span className="title">Hotel Name: </span>
//                     <span className="sub-title">{hotel.HotelName}</span>
//                   </div>
//                   <div className="roomdetail">
//                     <span className="title">Location: </span>
//                     <span className="sub-title">{hotel.Location}</span>
//                   </div>
//                   <div className="roomdetail">
//                     <span className="title">Room Type: </span>
//                     <span className="sub-title">{hotel.RoomType}</span>
//                   </div>
//                   <div className="roomdetail">
//                     <span className="title">Bed Type: </span>
//                     <span className="sub-title">{hotel.BedType}</span>
//                   </div>
//                 </div>
//               </div>
//             ))
//         ) : (
//           <p>No data available</p>
//         )}
//       </div>
//     </div>
  );
}

export default Newfile;

