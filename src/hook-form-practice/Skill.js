import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

const Skill = () => {
    const initialState = [{id: '1', title: 'Java SE' }, {id: '2', title: 'Java EE' }];
    const [skills , setSkills] = useState(initialState);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const saveData = (data) => {
        console.log("Data:", data);
        const id = Math.random().toString().substring(2, 5);
        const title = data.title;
        const newObject = {id, title};
        skills.push(newObject);
        console.log("SKILLS:", skills);
    }

    return (
        <>
        <ul className='row pb-2'>
           {
            skills.map(skill => {
              return <li key={skill.id}>{skill.title}</li>
            })
           }
        </ul>
        <br/>
        <form onSubmit={handleSubmit(saveData)}>
            <div className='row'>
                <div className='col'>
                    <input type='text' className='form-control' {...register("title", {required: true})} placeholder='Enter Title...' />
                    {errors.title && errors.title.type === "required" && (<span className='text-danger'>Title is Required!</span>)}
                </div>
                <div className='col'>
                    <button type='submit' className='btn btn-success' >+</button>
                </div>
            </div>
        </form>
        </>
    );

};

export default Skill;