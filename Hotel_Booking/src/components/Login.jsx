import React, {useState ,useRef, useContext} from 'react'
import './Login.css'
import { useForm } from 'react-hook-form';
import { auth } from './Firebase';
import { GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import {toast} from 'react-toastify'
import {useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import axios from "axios";

function Login() {
    const [email,Setemail] = useState('');
    const [password,Setpassword] = useState('');
    const displawarning = useRef();
    const invalidemail = useRef();
    const displaypasswordwarning = useRef();
    const invalidpassword = useRef();
    const {setusername} = useContext(UserContext);
    const {setuserlastname} = useContext(UserContext);

    let emailcheck,passwordcheck = false;
    const navigate = useNavigate();
    
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordregex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    function googleLogin() {
      
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            
        .then(async (result) => {
                console.log(result);
                if (result.user) {

                    toast.success("User logged in Successfully", {
                        position: 'top-center'
                    });
                }
            })

    }
    async function validateandchceckforuser() {
        // Email Warning
        if (email.length==0){
            displawarning.current.style.display='block';
            invalidemail.current.style.display = 'none';
          }
          else if (!emailregex.test(email)){
            displawarning.current.style.display='none'
            invalidemail.current.style.display = 'block';
          }
          else{
            displawarning.current.style.display = 'none';
            invalidemail.current.style.display = 'none';
            emailcheck = true;
          }
          // Password Waring
          if (password.length==0){
            displaypasswordwarning.current.style.display='block';
          }
          else if (!passwordregex.test(password)){
            displaypasswordwarning.current.style.display='none'
            invalidpassword.current.style.display = 'block';
          }
          else{
            invalidpassword.current.style.display = 'none';
            displaypasswordwarning.current.style.display='none'
            passwordcheck = true;
          }

          try {
            if (emailcheck === true && passwordcheck === true) {
                const response = await axios.post('http://localhost:5000/signinapi', {
                    EmailAddress: email,
                    Password:password
                });
                if (response.status==200){
                    setusername(response.data.username);
                    setuserlastname(response.data.userlastname);
                    navigate('/rooms')
                }
                else if (response.status==201){
                    alert("Please check the password");
                }
                else if (response.status==202){
                    alert("Account not found check email address or do the signup");
                }
            }
        }
        catch(err){
            console.log(err);
        }

    }

    // signup
    function signup(){
        navigate('/signup');
    }
    return (
        <div>
            <div className='parentdiv'>

                <div className='formdiv'>
                    {/* div->heading */}
                    <div className='heading'>
                        <h2>Login</h2>
                    </div>
                    {/* div->Email */}
                    <div className='Email'>
                        <div className='emailheading'>

                            Email address
                        </div>
                        <div>
                            <input type='Email' placeholder='Enter email' className='emailinput' onChange={(e) => Setemail(e.target.value)} ></input>
                        </div>
                        {/* Email Warning*/}
                        <div className='emailwarning' ref={displawarning}>
                            *Please enter the Email
                        </div>
                        <div className='emailwarning' ref={invalidemail}>
                            *Please enter the valid email
                        </div>
                    </div>
                    {/* div->Password */}
                    <div className='Email'>
                        <div className='emailheading'>

                            Password
                        </div>
                        <div>
                            <input type='Email' placeholder='Enter Password' className='emailinput' onChange={(e) => Setpassword(e.target.value)}></input>
                        </div>
                         {/* Email Warning*/}
                         <div className='passwordwarning' ref={displaypasswordwarning}>
                            *Please enter the password
                        </div>
                        <div className='passwordwarning' ref={invalidpassword}>
                            *Please enter the strong password
                        </div>
                        
                    </div>
                    {/*div->Submit Button*/}
                    <div className='buttonclass'>
                        <button className='button' onClick={validateandchceckforuser}>Submit</button>
                    </div>
                    {/* div-> NewUser*/}
                    <div className='newUser'>
                        <div>New user
                        </div>
                        <div className='register' onClick={signup}>Register Here
                        </div>
                    </div>
                    {/* continue with*/}
                    <div className='continuewith'>
                        -- Or continue with --
                    </div>

                    <div className='image'>
                    <div className='imagestyle'>
                    <img src={'/SigninwithGoogle.png'}  onClick={googleLogin}></img>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;
