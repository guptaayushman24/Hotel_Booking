import React, { useEffect, useState } from 'react'
import './SeeBlog.css'
import axios from 'axios';
function SeeBlog() {
  const [blogdata, setblogdata] = useState([]);
  async function seeallblogs() {
     try{
      const response = await axios.get('http://localhost:5000/allblogs');
      setblogdata(response.data);
     }
     catch(err){
        console.log(err);
     }
  }
  useEffect(() => {
  
    seeallblogs();
  }, []);
  return (
    <div>
      <div className='mainheading'>
        Explore Blogs
      </div>
      {
        blogdata && blogdata.length > 0 ? (
          blogdata.map((order, index) => (
            <div className='blogdesign' key={order._id}>
              <div className='blogheadingparent'>
                <div className='blogtitle'>{order.Title || "No data"}</div>
                <div className='createdby'>Created By:- {order.WritterName || "No data"}</div>
              </div>
              <div className='blogdescription'>
                {order.Blog || "No data"}
              </div>
            </div>
          ))
        ) : (
          <div>Loading....</div>
        )
      }


      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default SeeBlog
