import React, { useEffect, useState, useContext } from 'react';
import './NewComponent.css';
import { UserContext } from '../Context/Context'; // Adjust the path
import OtherFacility from './OtherFacility';
import Rooms from './Rooms';

const NewComponent = (props) => {
    // Access context values
    const { setCheckboxSelected } = useContext(UserContext);  // Use context to get the setter function
    const [checkboxotherfacility, setcheckboxotherfacility] = useState(false); // Track if any checkbox is selected
    const [checkboxfacility, setcheckboxfacility] = useState([
        { id: 1, label: 'Spa', checked: false },
        { id: 2, label: 'Swimming Pool', checked: false },
        { id: 3, label: 'Wifi', checked: false },
    ]);

   
    const handleCheckboxChange = (id) => {
        const newCheckboxes = checkboxfacility.map((checkbox) =>
            checkbox.id === id
                ? { ...checkbox, checked: !checkbox.checked } // Toggle the checked state
                : checkbox
        );

        const currentCheckbox = newCheckboxes.find((checkbox) => checkbox.id === id);
        if (currentCheckbox.checked) {
            setCheckboxSelected(currentCheckbox.label);  // Update the context value
            setcheckboxotherfacility(true);  // Mark checkboxotherfacility as true
        } else {
            setCheckboxSelected('');  // Clear the context value
            setcheckboxotherfacility(false);  // Mark checkboxotherfacility as false
        }

        setcheckboxfacility(newCheckboxes);  // Update the checkbox state
    };

    useEffect(() => {
        console.log("Selected other facility is", checkboxfacility);
        console.log("Checkbox other facility state is", checkboxotherfacility);
        props.handleadatafromcomponent(checkboxotherfacility); // Propagate data upwards
    }, [checkboxfacility, setCheckboxSelected, checkboxotherfacility]);

    return (
        <div className='checkbox-parent'>
            {checkboxfacility.map((checkbox) => (
                <div key={checkbox.id} className='checkbox-container'>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label>{checkbox.label}</label>
                </div>
            ))}
        </div>
    );
};

export default NewComponent;
