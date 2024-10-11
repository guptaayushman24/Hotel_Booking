import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [checkboxSelected, setCheckboxSelected] = useState('');

    return (
        <UserContext.Provider value={{ checkboxSelected, setCheckboxSelected }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
