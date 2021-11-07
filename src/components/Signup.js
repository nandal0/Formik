import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    address1: Yup.string()
    .required('Address is required'),
    number: Yup.number().min(10,'Number must be 10 digits')
    .required('Number is required')
  })
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address1: '',
        address2: '',
        address3: '',
        number: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <TextField label="Address First Field" name="address1" type="text" />
            <TextField label="Address Second Field" name="address2" type="text" />
            <TextField label="Address Third Field" name="address3" type="text" />
            <TextField label="Ente the Mobile Number" name="number" type="text"/>
            <button className="btn btn-dark mt-3" type="submit">Sign IN</button>
            <button className="btn btn-danger mt-3 ms-4 ml-3" type="reset">Reset</button>
            <NavLink to="/login">
            <button className="btn btn-primary mt-3 ms-4 ml-3" type="reset">Login</button>
            </NavLink>
            

          </Form>
        </div>
      )}
    </Formik>
  )
}
