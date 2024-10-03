import { useState } from "react";
import Filter_data from "./Filter_Data";
function Newfile() {
    const [boolean,setboolean] = useState(false);
    function toggle(){
        setboolean(!boolean);
        console.log(boolean);
    }
    return (
        <div>
        {
            boolean?(
                <Filter_data></Filter_data>
            ):(
                <p>{boolean}</p>
            )
        
        }

            <div>
                <button onClick={toggle}>Click Me</button>
            </div>
        </div>

       
    )
}
export default Newfile;