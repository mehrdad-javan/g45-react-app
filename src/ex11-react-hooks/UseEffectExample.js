import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {

    const [dateTime, setDateTime] = useState('Defaule Value...');
    const [reload, setReload] = useState(false);

    useEffect(()=> {
        console.log("useEffect executed!");
        const currentDate = new Date();
        setDateTime(currentDate.toString());
    },  [reload]); 

    const updateDate = () => {
        setReload(!reload); 
    }

    return (
        <div className='container'>
            <h3>UseEffect Example!</h3>
           <div className='alert alert-info'>{dateTime}</div>
           <div className='row'>
            <div className='col'>
                <button type='button' className='btn btn-warning' onClick={updateDate} >Update Date</button>
            </div>

           </div>
        </div>
    );
};

export default UseEffectExample;