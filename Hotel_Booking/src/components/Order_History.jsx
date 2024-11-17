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

  useEffect(() => {
    console.log(typeof(orderhistorydata));
    fetchorderhistory();
  },[]);
 

  return (
    <>
            <div className="heading">Booking Detail</div>
      {orderhistorydata && orderhistorydata.data && orderhistorydata.data.length > 0 ? (
        orderhistorydata.data.map((order, index) => (
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
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Order_History;
