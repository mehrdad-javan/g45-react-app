import React from 'react';

const Data = (props) => {

    return(
    <div>
       {props.showCard && (
        <div className='card'>
            <div className='card-header bg-info text-white'></div>
            <div className='card-body'>{props.firstName}</div>
            <div className='card-footer'>{props.lastName}</div>
        </div>
        )}
         
    </div>)
}

export default Data;