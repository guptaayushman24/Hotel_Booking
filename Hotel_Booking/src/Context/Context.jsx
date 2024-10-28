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
    return (
        <UserContext.Provider value={{ checkboxSelected, setCheckboxSelected,roomviewcheckboxselected,setroomviewcheckboxselected 
        ,roomviewfacility,setroomviewfacility,hotelprice,sethotelprice,hotelname,sethotelname,hotelrating,sethotelrating,username,setusername,userlastname,setuserlastname}}>
            {children}
        </UserContext.Provider>
    
);
};


export default UserProvider;
