import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [checkboxSelected, setCheckboxSelected] = useState('');
    const [roomviewcheckboxselected,setroomviewcheckboxselected] = useState('');
    const [roomviewfacility,setroomviewfacility] = useState(false);
    const [hotelprice,sethotelprice] = useState('');
    const [hotelname,sethotelname] = useState('');
    const [hotelrating,sethotelrating] = useState('');
    const [username,setusername] = useState('');
    const [userlastname,setuserlastname] = useState('');
    const [date,setdate] = useState(null);
    const [checkoutdate,setcheckoutdate] = useState(null);
    const [useremail,setuseremail] = useState('');
    const [displayalldata,setdisplayalldata] = useState(false);
    const [imageurl,setimageurl] = useState('');
    return (
        <UserContext.Provider value={{ checkboxSelected, setCheckboxSelected,roomviewcheckboxselected,setroomviewcheckboxselected 
        ,roomviewfacility,setroomviewfacility,hotelprice,sethotelprice,hotelname,sethotelname,hotelrating,sethotelrating,username,setusername,userlastname,setuserlastname,date,setdate,checkoutdate,setcheckoutdate,useremail,setuseremail,displayalldata,setdisplayalldata,imageurl,setimageurl}}>
            {children}
        </UserContext.Provider>
    
);
};


export default UserProvider;
