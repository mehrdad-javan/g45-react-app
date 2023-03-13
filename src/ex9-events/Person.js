import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

const Person = () => {

    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');

    const [person, setPerson] = useState({firstName: '', lastName: ''});
    const [showMessage, setShowMessage] = useState({type: '', message: ''});
    const [showData, setShowData] = useState(false);

    const changeFirstName = (e) => {
        const value = e.target.value;
        //console.log('value: ', value);
        //setFirstName(value);
        setPerson({...person, firstName: value});
    }

    const changeLastName = (e) => {
        const value = e.target.value;
        //console.log('value: ', value);
        //setLastName(value);
        setPerson({...person, lastName: value});
    }

    const clickBtn = () => {
        if(person.firstName.length > 2 && person.lastName.length > 2 ){
             console.log('Data: ' , person);
             setShowMessage({type: 'success', message: 'operation is done!'});
             setShowData(true);
        } else {
            setShowMessage({type: 'danger', message: 'operation is faild!'});
            setShowData(false);
        }
    }


    return (
    <div className='container'>
        {showMessage && (
            <AlertMessage message={showMessage.message} type={showMessage.type} />
        )}
        
        
        <div className='card'>
            <div className='card-header bg-info text-white'>FORM</div>
            <div className='card-body'>
                <form className='form-control'>
                    <div className='mb-3'>
                        <input type='text' className='form-control' id='firstName' name='firstName'
                        value={person.firstName} onChange={changeFirstName} placeholder='Enter FirstName' />
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' id='lastName' name='lastName' 
                        value={person.lastName} onChange={changeLastName} placeholder='Enter LastName' />
                    </div>

                    <div className='mb-3'>
                        <button type='button' className='btn btn-success' onClick={clickBtn} >Click Me</button>
                    </div>
                </form>
            </div>
            <div className='card-footer'></div>
        </div>

      

    {showData && (
    <>
        <br />
        <hr />
        <br />
        <div className='card'>
            <div className='card-header bg-dark text-white'>
               Data
            </div>
            <div className='card-body'>
                <div className='bm-3'>
                    <span>First Name: {person.firstName}</span>
                </div>
                <div className='bm-3'>
                    <span>Last Name: {person.lastName}</span>
                </div>
            </div>
        </div> 
    </>)}
          
    </div>
    );
        
};

export default Person;