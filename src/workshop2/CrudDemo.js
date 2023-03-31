import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';

const baseURL = "http://localhost:8080/api/v1/person";

const CrudDemo = () => {
    const [people, setPeople] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(()=> {
        axios.get(baseURL).
        then((response) => {
          if(response.status === 200){
            setPeople(response.data);
          } else {
            // add error message to alert component
          }
         
       });

    }, [reload]);

    const Table = () => {

      const TableHeader = () => {
        return (
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
        );
      };
    
      const TableAction = (props) => {
        const history = useHistory();

        const deletePersonById = async() => {

             await axios.delete(baseURL + '/' + props.id)
                .then((response) => {
                    if(response.status === 204){
                        console.log("Response:", response);
                        setReload(!reload);
                    } else {
                      // add error message to alert component
                    }
              }).catch(error => {
                // add error message to alert component
              });
          }

        return(
        <div>
          <button type="button" className="btn btn-primary" onClick={()=> history.push(`/details/${props.id}`)}>Details</button>
          <button type="button" className="btn btn-danger m-1" onClick={deletePersonById}>Delete</button>
          <button type="button" className="btn btn-warning" disabled>Edit</button>
        </div>);
      };
    
      const TableRow = () => {
        return (
          <tbody>
            {people.map(
              (person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.firstName} {person.lastName}</td>
                  <td>{person.email}</td>
                  <td>
                    <TableAction id={person.id}  />
                  </td>
                </tr>
              )
            )}
          </tbody>
        );
      };

        return (
          <div className="container">
                <table className="table table-striped">
                    <TableHeader />
                    <TableRow />
                </table>
            </div>
        );
      };
    
      

  const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const savePerson = async (data) => {
        await axios.post(baseURL, data)
            .then((response) => {
                if(response.status === 201){
                    setReload(!reload);
                    reset();
                } else {
                  // add error message to alert component
                }
              
            }).catch(error => {
                console.log("Error:", error.response);
                // add error message to alert component
        });    
    };
    
    return (
        <form className="form-control m-2 p-3" onSubmit={handleSubmit(savePerson)} >
                <div className="row mb-3">
                    <div className="col-6">
                        <input type="text" {...register("firstName", { required: true })} className="form-control" placeholder="Enter First Name"/>
                        {errors.firstName && <span className="text-danger">This is required</span>}
                    </div>
                    <div className="col-6">
                        <input type="text" {...register("lastName", { required: true })} className="form-control" placeholder="Enter Last Name"/>
                        {errors.lastName && <span className="text-danger">This is required</span>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" {...register("email", { required: true })} className="form-control" placeholder="Enter Email"/>
                        {errors.email && <span className="text-danger">This is required</span>}
                    </div>    
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" {...register("title", { required: false })} className="form-control" placeholder="Enter Title"/>
                    </div>    
                </div>
                <button type="submit" className="btn btn-success">Add</button>
                <button type="button" className="btn btn-danger m-2" onClick={()=> reset()}>Reset</button>
            </form>
    );
}

    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-header bg-dark p-4 text-white">CRUD Demo</div>
                <div className="card-body">
                  {/* ADD ALERT COMPONENT */}
                <Form />
                <br/>
                <Table />
                </div>
            </div>
        </div>
    );
};



// PersonDetails Component
export const PersonDetails = () => {

    const history = useHistory();
    let params = useParams();
    const [person, setPerson] = useState({});

    useEffect(()=> {
      let id = params.id;
      axios.get(baseURL + '/' +id)
        .then((res)=> {
            setPerson(res.data);
        }).catch(error => {
          // add error message to alert component
        })
    }, [])
  
    return (
      <div className="card m-2" style={{ width: 500 }}>
       <div className="card-header bg-info text-white">
        Details
       </div>
       <div className="card-body">
          <h5 className="card-title">{person.title}</h5>
          <p className="card-text">Id: {person.id} </p>
          <p className="card-text">Name: {person.firstName} {person.lastName} </p>
          <p className="card-text">Email: {person.email} </p>
        </div>
        <div className="card-footer bg-dark">
          <Link className="btn btn-outline-danger" to="/crud">Back</Link>
      </div>
      </div>                
    );
  }


export default CrudDemo;