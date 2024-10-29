import { useCallback, useContext } from "react";
import { UserContext } from "../src/Context/Context";
import { useNavigate } from "react-router-dom";
function Compare(){
    const data = useContext(UserContext);
    const navigate = useNavigate();
    function CompareDate(){
        if (data.checkoutdate<data.date){
          return false;
        }
        else{
            return true;
        }
      }
      if (data.date==null || data.checkoutdate==null){
        alert("Select the CheckIn Date and CheckOut Date before booking the hotel");
    
    }
    else if (data.date!=null &&  data.checkoutdate!=null){
      
        if (CompareDate()){
            navigate('/bookingpage');
        }
        else{
            alert("Check-out date cannot be earlier than check-in date");
        }
    }
}
export default Compare;