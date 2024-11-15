import React, { useEffect, useState, useContext } from 'react';
import './RoomView.css';
import { UserContext } from '../src/Context/Context';
const RoomsView = ()=>{
    // Extracting the setroomviewcheckboxselected from the Context
    const {setroomviewcheckboxselected,setroomviewfacility,roomviewcheckboxselected,setcheckboxmobile} = useContext(UserContext);
    // const [roomviewfacility,setroomviewfacility] = useState(false);
    const [roomviewcheckbox,setroomviewcheckbox] = useState([
        {id:1,label:'City View',checked:false},
        {id:2,label:'Garden View',checked:false},
        {id:3,label:'Pool View',checked:false},
        {id:4,label:'Sea View',checked:false}
    ]);

    const handleroomviewcheckboxchange = (id) => {
        const roomcheckbox = roomviewcheckbox.map((checkbox)=>
            checkbox.id===id
          ? {...checkbox,checked:!checkbox.checked}
          
          :checkbox
        );
        const currentroomcheckbox = roomcheckbox.find((checkbox)=>checkbox.id===id);
        if (currentroomcheckbox.checked){
            setroomviewcheckboxselected(currentroomcheckbox.label);
            setcheckboxmobile(currentroomcheckbox.label);
            setroomviewfacility(true);
        }
        else{
            setroomviewcheckboxselected('');
            setroomviewfacility(false);
        }
        
        setroomviewcheckbox(roomcheckbox);
    }
    useEffect(()=>{
        console.log("Selected facility",roomviewcheckboxselected);
    },[setroomviewcheckboxselected,setroomviewfacility,roomviewcheckbox]);



    return (
        <div className='checkbox-parentroomviews'>
            {
                roomviewcheckbox.map((checkbox) => (
                    <div key={checkbox.id} className='checkbox-containerroomviews'>
                        <input
                            type='checkbox'
                            checked={checkbox.checked}
                            onChange={() => handleroomviewcheckboxchange(checkbox.id)}
                        />
                        <label className='classlabel'>{checkbox.label}</label>
                    </div>
                ))
            }
        </div>
    );
    };
    
    export default RoomsView;