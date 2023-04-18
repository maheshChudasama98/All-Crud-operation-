import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import axios from 'axios';
import { InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';


const nameCheck = /^[a-zA-Z]{2,30}$/;
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validationSchema = yup.object({
    FullName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        // .matches(nameCheck, " only alphabets")
        .required('First Name is required'),
    UserName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required'),
    Email: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required'),
    Password: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required'),
    countryName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required'),
    DesignationName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required'),
    RoleName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .required('First Name is required'),
});

function UserForm(props) {

    useEffect(() => {
        RolesFun()
        DesignationFun()
        CompanyFun()
    }, []);



    const [Roles, setRoles] = useState([])
    const RolesFun = () => {
        axios.get('http://localhost:8080/sequlize/Roles').then((response) => {
            setRoles(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }

    const [Designation, setDesignation] = useState([])
    const DesignationFun = () => {
        axios.get('http://localhost:8080/sequlize/Designation').then((response) => {
            setDesignation(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }

    const [Company, setCompany] = useState([])
    const CompanyFun = () => {
        axios.get('http://localhost:8080/sequlize/Company').then((response) => {
            setCompany(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }



    const formik = useFormik({
        initialValues: {
            FullName: "Yug Chudasama",
            UserName: "Yug",
            Email: "Demo@gmail.com",
            Password: "Demo@123",
            countryName: "",
            DesignationName: "",
            RoleName: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("------------------------------------", values);

            props.handleClose()

            let data = {
                User_Name: values.FullName,
                User_user_name: values.UserName,
                User_email: values.Email,
                User_Password: values.Password,
                RoleRoleId: values.RoleName,
                DesignationDesiId: values.DesignationName,
                CompanyCompanyId: values.countryName
            }
            axios.post('http://localhost:8080/sequlize/User', data).then((response) => {
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
                    id="FullName"
                    name="FullName"
                    placeholder='name'
                    className=' my-2'
                    label="Full Name"
                    value={formik.values.FullName}
                    onChange={formik.handleChange}
                    error={formik.touched.FullName && Boolean(formik.errors.FullName)}
                    helperText={formik.touched.FullName && formik.errors.FullName} />

                <TextField
                    fullWidth
                    id="UserName"
                    name="UserName"
                    placeholder='name'
                    className=' my-2'
                    label="User Name"
                    value={formik.values.UserName}
                    onChange={formik.handleChange}
                    error={formik.touched.UserName && Boolean(formik.errors.UserName)}
                    helperText={formik.touched.UserName && formik.errors.UserName} />

                <TextField
                    fullWidth
                    id="Email"
                    name="Email"
                    placeholder='name'
                    className=' my-2'
                    label="Email"
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                    error={formik.touched.Email && Boolean(formik.errors.Email)}
                    helperText={formik.touched.Email && formik.errors.Email} />

                <TextField
                    fullWidth
                    id="Password"
                    name="Password"
                    placeholder='name'
                    className=' my-2'
                    label="Password"
                    value={formik.values.Password}
                    onChange={formik.handleChange}
                    error={formik.touched.Password && Boolean(formik.errors.Password)}
                    helperText={formik.touched.Password && formik.errors.Password} />



                <FormControl fullWidth className=' my-2'>
                    <InputLabel id="RoleName">Role Name</InputLabel>
                    <Select
                        labelId="RoleName"
                        label="RoleName"
                        id="RoleName"
                        name="RoleName"
                        fullWidth
                        value={formik.values.RoleName}
                        onChange={(e) => { formik.handleChange(e) }}
                        error={formik.touched.RoleName && Boolean(formik.errors.RoleName)}
                    // helperext={formik.touched.countryName && formik.errors.countryName}
                    >
                        {Roles.map((option, i) => (
                            <MenuItem key={i} value={option.Role_id}>
                                {i + 1}. {option.Role_Name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl fullWidth className=' my-2'>
                    <InputLabel id="DesignationName">Designation Name</InputLabel>
                    <Select
                        labelId="DesignationName"
                        label="DesignationName"
                        id="DesignationName"
                        name="DesignationName"
                        fullWidth
                        value={formik.values.DesignationName}
                        onChange={(e) => { formik.handleChange(e) }}
                        error={formik.touched.countryName && Boolean(formik.errors.DesignationName)}
                    // helperext={formik.touched.countryName && formik.errors.countryName}
                    >
                        {Designation.map((option, i) => (
                            <MenuItem key={i} value={option.Desi_id}>
                                {i + 1}. {option.Desi_Name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>



                <FormControl fullWidth className=' my-2'>
                    <InputLabel id="countryNametable">Country Name</InputLabel>
                    <Select
                        labelId="countryNametable"
                        label="countryName"
                        id="countryName"
                        name="countryName"
                        fullWidth
                        value={formik.values.countryName}
                        onChange={(e) => { formik.handleChange(e) }}
                        error={formik.touched.countryName && Boolean(formik.errors.countryName)}
                    // helperext={formik.touched.countryName && formik.errors.countryName}
                    >
                        {Company.map((option, i) => (
                            <MenuItem key={i} value={option.Company_id}>
                                {i + 1}. {option.Company_Name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <div className=' row'>
                    <div className='col-6'>
                        <Button color="primary" variant="contained" className='my-3' fullWidth type="submit"  >ADD</Button>
                    </div>
                    <div className='col-6'>
                        <Button variant="contained" className='bg-dark my-3' fullWidth onClick={() => { props.handleClose() }} >Cancel</Button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default UserForm
