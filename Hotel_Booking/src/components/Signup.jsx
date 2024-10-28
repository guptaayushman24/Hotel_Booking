import React, { useState, useRef } from 'react'
import './Signup.css'
import { useForm } from 'react-hook-form';
import { auth } from './Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [fname, Setfname] = useState('');
    const [lname, Setlname] = useState('');
    const [email, Setemail] = useState('');
    const [password, Setpassword] = useState('');
    const displawarning = useRef();
    const invalidemail = useRef();

    const displaynamewarning = useRef();
    const invalidfname = useRef();
    const diplaylnamewarning = useRef();
    const invalidlname = useRef();
    const displaypasswordwarning = useRef();
    const invalidpassword = useRef();
    
    const navigate = useNavigate();

    var flag = 0;

    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordregex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const nameregex = /^[A-Z][a-zA-Z'’ -]{1,49}$/;
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
        // FirstName Warning
        let fnamecheck, lnamecheck, emailcheck, passwordcheck = false;
        if (fname.length == 0) {
            displaynamewarning.current.style.display = 'block';

            invalidfname.current.style.display = 'none';
        }

        if (fname.length > 0) {
            for (let i = 0; i < fname.length; i++) {

                if (fname.charAt(i) >= '0' && fname.charAt(i) <= '9') {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0 && fname.length > 0) {
                displaynamewarning.current.style.display = 'none';
                invalidfname.current.style.display = 'none';
                console.log("Fname is correct");
                fnamecheck = true;
            }
            if (flag == 1) {
                invalidfname.current.style.display = 'block';
                displaynamewarning.current.style.display = 'none';
            }
        }

        if (fname.length == 0) {
            displaynamewarning.current.style.display = 'block';

            invalidfname.current.style.display = 'none';
        }

        // LastName warning
        if (lname.length == 0) {
            diplaylnamewarning.current.style.display = 'block';

            invalidlname.current.style.display = 'none';
        }

        if (lname.length > 0) {
            for (let i = 0; i < lname.length; i++) {

                if (lname.charAt(i) >= '0' && lname.charAt(i) <= '9') {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0 && lname.length > 0) {
                diplaylnamewarning.current.style.display = 'none';
                invalidlname.current.style.display = 'none';
                lnamecheck = true;
                console.log("Lname is correct");
            }
            if (flag == 1) {
                invalidlname.current.style.display = 'block';
                diplaylnamewarning.current.style.display = 'none';
            }
        }

        if (lname.length == 0) {
            diplaylnamewarning.current.style.display = 'block';

            invalidlname.current.style.display = 'none';
        }



        // Email Warning
        if (email.length == 0) {
            displawarning.current.style.display = 'block';
            invalidemail.current.style.display = 'none';
        }
        else if (!emailregex.test(email)) {
            displawarning.current.style.display = 'none'
            invalidemail.current.style.display = 'block';
        }
        else {
            displawarning.current.style.display = 'none';
            invalidemail.current.style.display = 'none';
            emailcheck = true;
            console.log("Email correct");
        }
        // Password Waring
        if (password.length == 0) {
            displaypasswordwarning.current.style.display = 'block';
        }
        else if (!passwordregex.test(password)) {
            displaypasswordwarning.current.style.display = 'none'
            invalidpassword.current.style.display = 'block';
        }
        else {
            invalidpassword.current.style.display = 'none';
            displaypasswordwarning.current.style.display = 'none'
            passwordcheck = true;
            console.log("Password Correct");
        }

        

        // If all user data is correct save into the mongodb
        try {
            if (fnamecheck == true && lnamecheck == true && emailcheck == true && passwordcheck == true) {
                await axios.post('http://localhost:5000/signupapi', {
                    FirstName:fname,
                    LastName:lname,
                    EmailAddress:email,
                    Password:password
                }
            )};
            if (fnamecheck == true && lnamecheck == true && emailcheck == true && passwordcheck == true){
                alert("Signup successfull do the signin");
                navigate('/signin');
            }
            else{
                alert("Check all the information");
            }
        }
        catch(err){
            if (err.response && err.response.status === 409){
                alert(err.response.data.message);
            }
        }

    }

    // Sign in 
    function signin(){
        console.log("Signin Clicked");
        navigate('/signin');
    }
    return (
        <div>
            <div className='parentdiv'>

                <div className='formdiv' style={{ height: '42rem' }}>
                    {/* div->heading */}
                    <div className='heading'>
                        <h2>Sign Up</h2>
                    </div>
                    {/* div->Name*/}
                    <div className='Email'>
                        <div className='emailheading'>

                            First Name
                        </div>
                        <div>
                            <input type='text' placeholder='First Name' className='emailinput' onChange={(e) => Setfname(e.target.value)}></input>
                        </div>
                        {/* Name Warning*/}
                        <div className='emailwarning' ref={displaynamewarning}>
                            *Please enter the Name
                        </div>
                        <div className='emailwarning' ref={invalidfname}>
                            *Please enter the valid name
                        </div>
                    </div>
                    {/* div->Last Name*/}
                    <div className='Email'>
                        <div className='emailheading'>

                            LastName
                        </div>
                        <div>
                            <input type='Email' placeholder='Last Name' className='emailinput' onChange={(e) => Setlname(e.target.value)}></input>
                        </div>
                        {/* LastName Warning*/}
                        <div className='emailwarning' ref={diplaylnamewarning}>
                            *Please enter the Last Name
                        </div>
                        <div className='emailwarning' ref={invalidlname}>
                            *Please enter the valid last name
                        </div>
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
                    <div className='newUser' onClick={signin}>
                        <div>Already registered
                        </div>
                        <div className='register'>Login
                        </div>
                    </div>
                    {/* continue with*/}
                    <div className='continuewith'>
                        -- Or continue with --

                    </div>

                    <div className='image'>
                        <div className='imagestyle'>
                            <img src={'/SigninwithGoogle.png'} onClick={googleLogin}></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;
