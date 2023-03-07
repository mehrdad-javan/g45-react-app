import React from 'react';
import Table from '../ex4-table/Table';
//import './table.css';

const StyleExample = () => {
    return (
        <div>
            <h3>Styling Using React</h3>
            <h4 style={{color: 'red'}} >Hello React!</h4>
            <br/>
            <hr />
            <Table />
        </div>
    );
};

export default StyleExample;