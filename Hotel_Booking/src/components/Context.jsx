import React, { createContext, useState } from "react";

// Create the context
export const CheckboxContext = createContext();

// Create the provider component
export const CheckboxProvider = ({ children }) => {
  const [checkboxselected, setCheckboxSelected] = useState('');

  return (
    <CheckboxContext.Provider value={{ checkboxselected, setCheckboxSelected }}>
      {children}
    </CheckboxContext.Provider>
  );
};