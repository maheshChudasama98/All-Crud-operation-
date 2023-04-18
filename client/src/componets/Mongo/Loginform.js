import React, { useState } from 'react'
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import axios from 'axios';
import Alartbox from './Alartbox';




const nameCheck = /^[a-zA-Z]{2,30}$/;
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .matches(nameCheck, " only alphabets")
        .required('First Name is required'),
    lastName: yup
        .string('Enter your last name')
        .min(2, 'Enter a valid Last Name')
        .matches(nameCheck, " only alphabets")
        .required('Last Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .matches(emailCheck, " Demo@gmail.com")
        .required('Email is required'),
    password: yup
        .string('Enter your email')
        // .email('Enter a valid email')
        // .matches(emailCheck, " Demo@gmail.com")
        .required('Email is required'),
});

function Loginform(props) {



    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "plusinfosys"
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {

            props.handleClose()

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    // 'token': localStorage.getItem('token')
                }
            };

            let data = {
                name: values.firstName,
                role: values.lastName,
                email: values.email,
                password: values.password,
            }
            axios.post('http://localhost:8080/api/mongodb/user', data, config).then((response) => {
                props.getUseApi()
            }).catch((error) => {

            })
        },
    });


    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit} >

                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    placeholder='name'
                    className=' my-2'
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName} />



                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Role"
                    className=' my-2'

                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName} />


                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    className=' my-2'

                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />


                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    className=' my-2'

                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password} />


                <div className=' row'>
                    <div className='col-6'>
                        <Button color="primary" variant="contained" className='my-3' fullWidth type="submit"  >Edit</Button>
                    </div>
                    <div className='col-6'>
                        <Button variant="contained" className='bg-dark my-3' fullWidth onClick={() => { props.handleClose() }} >Cancel</Button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default Loginform
