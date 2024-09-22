import React, { useState } from 'react'
import Login from '../components/Login'
function Landing_Page() {
    const [show,Setshow] = useState(false);
    function showLogin(){
        Setshow(true);
    }
  return (
    <div>
      <button onClick={showLogin}>Show Login Page</button>
      {/* {
         show && (
            <Login></Login>
         )
      } */}
    </div>
  
)
}

export default Landing_Page
