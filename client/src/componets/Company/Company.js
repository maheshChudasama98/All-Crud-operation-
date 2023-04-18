import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CompanyAdd from './CompanyAdd'
import CompanyUpdata from './CompanyUpdata'

// import Alartbox from './Alartbox';
import axios from 'axios';



const Company = () => {

    const [userlist1, setUserlist1] = useState([])
    const [datapass, setDatapass] = useState(null)

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    //  alter box 
    const [msg, setMsg] = useState(null);
    const [alertbox, setAlertbox] = useState(true);
    const [alertboxOpen, setAlertboxOpen] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUseApi()
    }, []);


    const modalcallbak = (val) => {
        if (false == val) {
            setOpen(false)
        }
    }

    const getUseApi = () => {

        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        // fetch('http://localhost:8080/sequlize/Company')
        //     .then(response => response.json())
            // .then(json => console.log(json))

        axios.get('http://localhost:8080/sequlize/Company',config).then((response) => {
            setUserlist1(response.data)
            setMsg("SUccesss")
        }).catch((error) => {
            setMsg("Unsuccess")
        });

    }

    const update = (edititem) => {

        let data = {
            first_name: "",
        }
        setDatapass(data)

        if (open == false) {
            setOpen(true)
        }
    }

    const modalcallbakModel = (val) => {
        if (false == val) {
            setOpenModal(false)
        }
    }
    const updateModal = (edititem) => {
        setDatapass(edititem)
        if (openModal == false) {
            setOpenModal(true)
        }
    }


    const Deleteitem = (item) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                // 'token': localStorage.getItem('token')
            }
        };

        axios.delete(`http://localhost:8080/sequlize/Company/${item.Company_id}`, config).then((response) => {
            getUseApi()
            console.log("success");
            console.log(response.message);
            setMsg("SUccesss")
        }).catch((error) => { });
    }

    return (
        <>
            <div className='container mt-5'>
                <button className=' float-end btn  btn-outline-dark my-4' onClick={() => update()}>
                    Add User
                    <PersonAddAlt1Icon className='mx-1' />
                </button>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">Company Name</TableCell>
                                <TableCell align="center">Edit / Remove</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {userlist1.map((item, i) => {
                                return (
                                    <TableRow
                                        key={item.Company_id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{i + 1}</TableCell>
                                        <TableCell align="center">{item.Company_Name}</TableCell>
                                        <TableCell align="center">

                                            <button className=' btn  btn-outline-dark mx-2' onClick={() => updateModal(item)}>
                                                <EditIcon />
                                            </button>

                                            <button className=' btn  btn-outline-danger' onClick={() => Deleteitem(item)} ><DeleteForeverIcon /> </button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {open && <CompanyAdd modalcallbak={modalcallbak} datapass={datapass} getUseApi={getUseApi} />}
                {openModal && <CompanyUpdata modalcallbakModel={modalcallbakModel} datapass={datapass} getUseApi={getUseApi} />}
            </div>


        </>
    )
}

export default Company
