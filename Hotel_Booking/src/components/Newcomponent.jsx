import React, { useEffect, useState, useContext } from 'react';
import './NewComponent.css';
import { UserContext } from '../Context/Context'; // Adjust the path


const NewComponent = (props) => {
    // Access context values
    const { setCheckboxSelected } = useContext(UserContext);  // Use context to get the setter function
    const [checkboxotherfacility, setcheckboxotherfacility] = useState(false); // Track if any checkbox is selected
    const [checkboxfacility, setcheckboxfacility] = useState([
        { id: 1, label: 'Spa', checked: false },
        { id: 2, label: 'Swimming Pool', checked: false },
        { id: 3, label: 'Wifi', checked: false },
    ]);
    const {setcheckboxmobile} = useContext(UserContext);
   
    const handleCheckboxChange = (id) => {
        const newCheckboxes = checkboxfacility.map((checkbox) =>
            checkbox.id === id
                ? { ...checkbox, checked: !checkbox.checked } // Toggle the checked state
                : checkbox
        );

        const currentCheckbox = newCheckboxes.find((checkbox) => checkbox.id === id);
        if (currentCheckbox.checked) {
            setCheckboxSelected(currentCheckbox.label);  // Update the context value
            setcheckboxmobile(currentCheckbox.label);

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
        <div className='checkbox-parentotherfacility'>
            {checkboxfacility.map((checkbox) => (
                <div key={checkbox.id} className='checkbox-containerotherfacility'>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label className='classlabel'>{checkbox.label}</label>
                </div>
            ))}
        </div>
    );
};

export default NewComponent;
