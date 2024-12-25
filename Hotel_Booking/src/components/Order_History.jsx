import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/Context';
import './Order_History.css'
function Order_History() {
  const data = useContext(UserContext);
  const [orderhistorydata, setorderhistorydata] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchorderhistory() {
    try {
      const response = await axios.post('https://hotel-booking-1lqf.onrender.com/orderhistorydetail', {
        Email: data.useremail
      });
      setorderhistorydata(response.data);
      console.log(response.data);
      setLoading(false); // Data is loaded
    } catch (err) {
      console.error("Error fetching order history:", err);
      setLoading(false); // Stop loading even if there's an error
    }
  }

  // Deleting all order history of the user
  async function deleteallordehistory(){
    try{
      console.log(data.useremail);
      const response = await axios.delete(`https://hotel-booking-1lqf.onrender.com/${data.useremail}`);
      console.log("Frontend response",response);
      if (response.status===200){
        setorderhistorydata('');
        alert("Order History Deleted Successfull");
      }
      else{
        alert("Order History is not deleted")
        console.log(response);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(typeof(orderhistorydata));
    fetchorderhistory();
  },[]);
 

  return (
    <>
            <div className="heading">Booking Detail</div>
      {orderhistorydata && orderhistorydata.data && orderhistorydata.data.length > 0 ? (
        orderhistorydata.data.map((order, index) => (
       <div className='maindivorderhistory'>
       <div className="box" key={order._id}>
        
        <div className="details">
          <div className="detail-item">
            <div className="detail-content">{order.HotelName || "No data"}</div>
          </div>
          <div className="detail-item">
            <div className="detail-content">{order.Price || "No data"}</div>
          </div>
          <div className="detail-item">Name
            <div className="detail-content">{order.UserName || "No data"}</div>
          </div>
          <div className="detail-item">Checkin Date
            <div className="detail-content">{order.CheckinDate || "No data"}</div>
          </div>
          <div className="detail-item">Checkout Date
            <div className="detail-content">{order.CheckoutDate || "No data"}</div>
          </div>
        </div>
       
      </div>

     
      
       </div>
       
          
        ))
      ) : (
        <div>Loading...</div>
      )}
      <div className='deleteorderhistory'>
        <button className='deleteorderhistorybutton' onClick={deleteallordehistory}>Delete All Order History</button>
      </div>
    </>
  );
}

export default Order_History;
