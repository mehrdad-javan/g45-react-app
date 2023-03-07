import React from 'react';

const NameList = (props) => {

    

    const getLastName  = (name) => {
       let lastName = name.split(" ")[1];
        return <b>{lastName}</b>
    }



    return (
        <ul>
           { props.names.map(name => <li>{name} - {getLastName(name)} - {name.toUpperCase()}</li>) } 
        </ul>
    );
};

export default NameList;