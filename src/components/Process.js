import React from 'react';
import { Modal, Button }   from '@mui/material'; 

const Process = () => {
    const body = 'How are Bernard\'s ancestors represented in his DNA?'
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Open Modal</Button>
            <Modal 
                open={open}
                close={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}

export default Process;