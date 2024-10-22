import React, { createContext, useState } from "react";

// Create the context
export const CheckboxContext = createContext();

// Create the provider component
export const CheckboxProvider = ({ children }) => {
  const [checkboxselected, setCheckboxSelected] = useState('');
  const [price,setprice] = useState('');

  return (
    <CheckboxContext.Provider value={{ checkboxselected, setCheckboxSelected,price,setprice }}>
      {children}
    </CheckboxContext.Provider>
  );
};