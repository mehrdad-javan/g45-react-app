import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addPersonAction,
  getPeopleAction,
  selectPeople,
  deletePersonByIdAction,
} from "../store/reducer/people";

// https://andela.com/insights/redux-toolkit-state-management-for-the-future/
// https://www.esri.com/arcgis-blog/products/3d-gis/3d-gis/react-redux-building-modern-web-apps-with-the-arcgis-js-api/
// https://redux.js.org/tutorials/essentials/part-5-async-logic

const PersonRedux = () => {
  
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(getPeopleAction());
  }, []);

  const saveData = (data) => {
    console.log('DDDDDDDD', data);
    dispatch(addPersonAction(data));
  };

  const deleteData = (id) => {
    dispatch(deletePersonByIdAction(id));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h4>React and Redux Toolkit Example</h4>
        </div>
        <div className="card-body">
          <br />
          <div className="row">
            <div className="col-4">
              <form onSubmit={handleSubmit(saveData)}>
                <div className="row mb-2">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Enter FirstName..."
                      {...register("firstName", {
                        required: true,
                        maxLength: 10,
                      })}
                      
                    />
                    {errors.firstName && errors.firstName.type === "required" && (
                        <span className="text-danger">
                          firstName is required
                        </span>
                      )}
                    {errors.firstName && errors.firstName.type === "maxLength" && (
                        <span className="text-danger">Max length exceeded</span>
                      )}
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Enter LastName..."
                      {...register("lastName", {
                        required: true,
                        maxLength: 10,
                      })}
                    />
                    {errors.lastName && errors.lastName.type === "required" && (
                      <span className="text-danger">LastName is required</span>
                    )}
                    {errors.lastName &&
                      errors.lastName.type === "maxLength" && (
                        <span className="text-danger">Max length exceeded</span>
                      )}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Enter Email..."
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-danger">Email is required</span>
                    )}
                  </div>
                </div>

                <fieldset className="row mb-3">
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" value="java" {...register("title")} checked />
                      <label className="form-check-label">Java</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" value="c#" {...register("title")} />
                      <label className="form-check-label">C#</label>
                    </div>
                  </div>
                </fieldset>

                <div className="row mb-3">
                  <div className="col-sm-6">
                    <button type="submit" className="btn btn-info form-control">Submit</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-8">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person) => {
                    return (
                      <tr key={person.id}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.email}</td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={() => deleteData(person.id)} >x</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <img src="react-redux-overview.png" width="600" />
    </div>
  );
};

export default PersonRedux;
