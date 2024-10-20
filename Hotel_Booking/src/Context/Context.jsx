import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [checkboxSelected, setCheckboxSelected] = useState('');
    const [roomviewcheckboxselected,setroomviewcheckboxselected] = useState('');
    const [roomviewfacility,setroomviewfacility] = useState(false);

    return (
        <UserContext.Provider value={{ checkboxSelected, setCheckboxSelected,roomviewcheckboxselected,setroomviewcheckboxselected 
        ,roomviewfacility,setroomviewfacility}}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;
