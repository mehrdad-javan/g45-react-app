import React, { useState } from 'react';
import axios from 'axios';
import AlertMessage from './AlertMessage';

const AxiosDemo = () => {

    const API_URL = 'http://localhost:8080/api/v1/person';

    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState();

    const [selectedId, setSelectedId] = useState(4);

    const [alert, setAlert] = useState({type: '', message: ''});

    const getRequestAction = async () => {
        console.log("### Start");
        await axios.get(API_URL).then(response => {
            console.log("RESPONSE:", response);
            if(response.status === 200){
                setPeople(response.data);
                setAlert({type: 'success', message: 'GET operation is done!'})
            } else {
                setAlert({type: 'warning', message: 'Display API Error Message...'});
            }
        }).catch(error => {
            console.log("ERROR: ", error);
            setAlert({type: 'danger', message: error.message})
        });

        console.log("### End");
    }

    const getRequestByIdAction = async () => {

        console.log("### Start");
        await axios.get(API_URL + '/' + selectedId ).then(response => {
            console.log("RESPONSE:", response);
            if(response.status === 200){
                setPerson(response.data);
                setAlert({type: 'success', message: 'GET By Id operation is done!'})
            } else {
                setAlert({type: 'warning', message: 'Display API Error Message...'});
            }
        }).catch(error => {
            console.log("ERROR: ", error);
            setAlert({type: 'danger', message: error.message})
        });

        console.log("### End");

    }

    const postRequestAction = async () => {

        const data = {firstName: 'test', lastName:'testsson', email: 'test@test.se', title: 'TEST'};
        await axios.post(API_URL, data).then(response => {
            console.log("RESPONSE:", response);
            if(response.status === 201){
                setPerson(response.data);
                setAlert({type: 'success', message: 'Post operation is done!'});
            } else {
                setAlert({type: 'warning', message: 'Display API Error Message...'});
            }

        }).catch( error => {
            console.log("ERROR: ", error);
            setAlert({type: 'danger', message: error.message});
        });
    }

    
    const putRequestAction = async () => {

        const data = {id: 4, firstName: 'test2', lastName:'testsson2', email: 'test@test.se', title: 'TEST'};
        await axios.put(API_URL, data).then(response => {
            console.log("RESPONSE:", response);
            if(response.status === 204){
                setAlert({type: 'success', message: 'Put operation is done!'});
            } else {
                setAlert({type: 'warning', message: 'Display API Error Message...'});
            }

        }).catch( error => {
            console.log("ERROR: ", error);
            setAlert({type: 'danger', message: error.message});
        });
    }

    return (
        <div className='container pt-5'>
            <h3>Axios Demo</h3>
            <AlertMessage message={alert.message} type={alert.type} />
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-info' onClick={getRequestAction}>Get</button>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-primary' onClick={getRequestByIdAction}>Get By Id</button>
                </div>
            </div>
            
            
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-success' onClick={postRequestAction}>Post</button>
                </div>
            </div>

            
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-warning' onClick={putRequestAction}>Post</button>
                </div>
            </div>

        </div>
    );
};

export default AxiosDemo;