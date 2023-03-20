import React from 'react';
import { useForm } from 'react-hook-form';

const HookFormDemo = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();

    const saveData = (data)=> {
        console.log("DATA:", data);
    }

    return (
        <div className='container mt-3'>
            <form onSubmit={handleSubmit(saveData)}>
                <div className='mb-3'>
                    <input type="text" {...register("firstName", {required: true, maxLength: 40})} className='form-control' id="firstName" name="firstName" placeholder='Enter First Name...' />
                   {errors.firstName && errors.firstName.type === "required" && (<span className='text-danger'>First Name is Required!</span>)} 
                   {errors.firstName && errors.firstName.type === "maxLength" && (<span className='text-danger'>Max Lrngth is exceeded!</span>)} 
                </div>
                
                <div className='mb-3'>
                    <input type="text" {...register("lastName", {required: true, maxLength: 40})} className='form-control' id="lastName" name="lastName" placeholder='Enter Last Name...' />
                    {errors.lastName && errors.lastName.type === "required" && (<span className='text-danger'>Last Name is Required!</span>)} 
                    {errors.lastName && errors.lastName.type === "maxLength" && (<span className='text-danger'>Max Lrngth is exceeded!</span>)} 

                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary'   >Click Me!</button>
                </div>
            </form>
            
        </div>
    );

};

export default HookFormDemo;