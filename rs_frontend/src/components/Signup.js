import React, { useState } from "react";
import RentalApi from "../api/api";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleError = (errors) => {};

  const registerOptions = {
      username: { required: "Username is required" },
      password: { required: "Password is required" },
      firstName: { required: "FirstName is required" },
      lastName: { required: "LastName is required" },
      email: { required: "Email is required" },
  };

  async function handleSignup( data, evt) { 
    evt.preventDefault();
    try {
      let formData = {
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        isAdmin: false
      }
      let result = await RentalApi.signup(formData);
      if (result.token) {
        let url = `/`
        navigate(url);
      } else {
        alert( "Error " + result.error);
      }
    } catch (Error){
      console.log("in catch block " + errors);
      alert("Error " + errors);
    }
  }
return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3 className="mt-4">Signup Form</h3>
      <hr></hr>
      <div className="card mt-4">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignup, handleError)}>
            <div className="form-group">
                <label>Username</label>
                <input
                    name="username"
                    className="form-control" 
                    type="text" {...register('username', registerOptions.street) }/>     
                  <small className="text-danger">
                        {errors?.username && errors.username.message}
                  </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" className="form-control" 
                  type="password" {...register('password', registerOptions.password) }/>
                <small className="text-danger">
                    {errors?.password && errors.password.message}
                </small>
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                  name="firstName" className="form-control" 
                  type="text" {...register('firstName', registerOptions.firstName)}
              />
              <small className="text-danger">
                {errors?.firstName && errors.firstName.message}
              </small>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName" className="form-control" 
                type="text" {...register('lastName', registerOptions.lastName)}
              />
              <small className="text-danger">
                  {errors?.lastName && errors.lastName.message}
              </small>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email" className="form-control" 
                type="email" {...register('email', registerOptions.email)}
              />
               <small className="text-danger">
                  {errors?.email && errors.email.message}
              </small>
            </div>
            <button className="mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
  
export default Signup;