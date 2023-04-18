
import React from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const nameCheck = /^[a-zA-Z]{2,30}$/;
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .matches(emailCheck, " Demo@gmail.com")
        .required('Email is required'),
    pass: yup
        .string('Enter your Web site')
        // .matches(nameRegExp, " only alphabets")
        .required('Web Site is required'),

});

const LoginCrud = () => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: 'user1@gmail.com',
            pass: 'plusinfosys'

        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let data = { email: values.email, password: values.pass }
            // console.log("this is submit")

            axios.post('http://192.168.1.146:8081/api/auth/signin', data, config).then((response) => {
                console.log( "this is sign in respionse")
                localStorage.setItem('token', response.data.data.accessToken);
                navigate("/users")
            }).catch((error) => {
                // setOpen(true)
            });

        },
    });
    return (
        <>
            <div className='container  shadow  p-5'>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='text-center  mb-4'> Login</h1>
                    <div className="container">
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            className='my-3'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="pass"
                            name="pass"
                            label="Password"
                            type="password"
                            value={formik.values.pass}
                            onChange={formik.handleChange}
                            error={formik.touched.pass && Boolean(formik.errors.pass)}
                            helperText={formik.touched.pass && formik.errors.pass}
                        />

                        <Button color="primary" variant="contained" className='my-3 mb-5 shadow ' fullWidth type="submit">submit</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginCrud
