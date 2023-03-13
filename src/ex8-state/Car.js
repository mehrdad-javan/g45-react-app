import React, { useEffect, useState } from 'react';

const Car = () => {

    const [car, setCar] = useState({brand: 'VOLVO', model: 'V60'});

    useEffect( ()=> {
        console.log("useEffect has been executed!");
        //setCar({brand: 'BMW', model: 'X6'});

        setCar({...car, model: 'V90', color: 'GRAY'});
    } ,  []);



    return (
        <div>
            <b> {car.brand} {car.model} {car.color} </b>
        </div>
    );

};

export default Car;