import React from 'react'
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import axios from 'axios';



const nameCheck = /^[a-zA-Z]{2,30}$/;
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validationSchema = yup.object({
    CompanyName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required')
});

function SequlizeUpdateModal(props) {

    const formik = useFormik({
        initialValues: {
            Company_id: props.pass.Company_id,
            CompanyName: props.pass.Company_Name,
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log("-------------")
            props.handleClose()

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            };

            let data = {
                Company_id: values.Company_id,
                Company_Name: values.CompanyName,
            }

            console.log(data);

            axios.put(`http://localhost:8080/sequlize/Company/${data.Company_id}`, data).then((response) => {
                console.log("Success full")
                props.getUseApi()

            }).catch((error) => {
                // setOpen(true)
                console.log("---------------", error);
            })
        },
    });


    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit} >

                <TextField
                    fullWidth
                    id="CompanyName"
                    name="CompanyName"
                    placeholder='name'
                    className=' my-2'
                    label="Company Name"
                    value={formik.values.CompanyName}
                    onChange={formik.handleChange}
                    error={formik.touched.CompanyName && Boolean(formik.errors.CompanyName)}
                    helperText={formik.touched.CompanyName && formik.errors.CompanyName} />

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

export default SequlizeUpdateModal
