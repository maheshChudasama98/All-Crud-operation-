
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import UserUpdateModal from './UserUpdateModal'

function UserUpdata(props) {
    const [open] = useState(true);
    const [pass, setPass] = useState(props.datapass)
    const handleClose = () => { props.modalcallbakModel(false) };
    console.log(pass,'pass')
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                open={open}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description" >

                <Box sx={style} >
                    <Button onClick={handleClose} className=" d-block float-end" > <CloseIcon /> </Button>
                    <br />
                    {/* <ModalForm pass={pass} stateList={props.stateList} handleClose={handleClose} /> */}
                    <UserUpdateModal handleClose={handleClose} pass={pass} getUseApi={props.getUseApi}/> 
                </Box>
            </Modal>
        </>
    )
}

export default UserUpdata
