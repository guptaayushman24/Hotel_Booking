import React, { useState } from 'react'
import './Reset_Password.css'
import axios from "axios"
import {useNavigate} from 'react-router-dom';
function Reset_Password() {
  const [hidepassword, sethidepassword] = useState(false);
  const [hideaccountexist, sethideaccountexist] = useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const navigate = useNavigate();
  const passwordregex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  async function accountexist() {
    try {
      if (email.length == 0) {
        alert("Please enter the email address");
      
        return;
      }
      const response = await axios.post('https://hotel-booking-1lqf.onrender.com/checkuser', {
        EmailAddress: email
      });

      if (response.status === 200) {
        sethidepassword(true);
        sethideaccountexist(false);
      } else if (response.status === 201) {
        alert("Please check the email address or do the signup");
        return;

      }
    } catch (error) {
      console.error("Error during API call:", error);
      alert("An error occurred. Please try again later.");
    }
  }
  async function changepassword() {
    try {
      if (password.length == 0) {
        alert("Please enter the password field");
        return;
      }
      if (newpassword.length == 0) {
        alert("Please enter the newpassword field");
        return;
      }
      if (!passwordregex.test(password)){
        alert("Please enter the strong password");
      }
      if (passwordregex.test(password) && password != newpassword) {
        alert("Password and re-enterd password not matched");
        return;
      }
      if (password == newpassword) {
        const response = await axios.put('https://hotel-booking-1lqf.onrender.com/updatepassword', {
          EmailAddress: email,
          Password: password
        })

        if (response.status == 200) {
          alert("Password Changed Successfully !!!!");
          navigate('/signin')
          
        }
        else {
          alert("Something went wrong try after some time")
        }
      }

    }
    catch (err) {
      console.error("Error response:");
    }
  }

  return (
    <div>
      <div className='mainrp'>
        <div className='emailrp'>
          <div className='emailcontent'>Enter your email address</div>
        </div>

        <div className='emailinputrp'>
          <input placeholder='Enter email address' type='email' onChange={(e) => setemail(e.target.value)}></input>
        </div>
        {
          hidepassword && (

            <>
              <div className='emailrp'>
                <div className='emailcontentrp'>New Password</div>

              </div>

              <div className='emailinputrp'>
                <input placeholder='New Password' onChange={(e) => setpassword(e.target.value)}></input>
              </div>

              <div className='emailrp'>
                <div className='emailcontentrp'>Re-enter New Password</div>

              </div>

              <div className='emailinputrp'>
                <input placeholder='Re-enter New Password' type='email' onChange={(e) => setnewpassword(e.target.value)}></input>
              </div>



            </>
          )
        }


      </div>
      <div className='buttonstylerp'>
        {
          hideaccountexist && (
            <button className='accountexistrp' onClick={accountexist}>Account Exist</button>
          )
        }

        {
          hidepassword && (
            <button className='accountexistrp' onClick={changepassword}>Change Password</button>
          )
        }

      </div>

    </div>
  )
}

export default Reset_Password
