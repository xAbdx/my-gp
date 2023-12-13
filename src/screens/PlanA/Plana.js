import * as React from 'react';
import './Plana.css'
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Arrow3 from '../../img/ArrowPlan.svg';
import StartIcon from '@mui/icons-material/Start';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TestImg from '../../img/Test.png';

function Plana() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div class="rootBg">
            {/* Navbar */}
            <ResponsiveAppBar />
            {/* hero Section */}
            <div class="heroContent">
                <div class="heroContentRight">
                    <h1 class="titleA">Plan A</h1>
                    <div class="heroContentRightItems">
                        <div class="leftC">
                            <p>Estimated time</p>
                            <div class="leftIcon">
                                <AccessTimeIcon sx={{ color: '#F96719' }} />
                                <p>5 to 6h</p>
                            </div>
                        </div>
                        <div class="RightC">
                            <p>Estimated money </p>
                            <div class="leftIcon">
                                <PointOfSaleIcon sx={{ color: '#43A047' }} />
                                <p>250$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img class="arrow" src={Arrow3} width="20px" alt="img"></img>
                </div>
            </div>
            {/* startOff Section */}
            <div class="startOff">
                <h3>Start off</h3>
                <div>
                    <StartIcon />
                </div>
            </div>
            {/* fragment img Section */}
            <React.Fragment>
                <img class="pointer" src={TestImg} width="200px" alt="img" onClick={handleClickOpen}></img>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogContent>
                        <Box
                            noValidate
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <img class="arrow" src={TestImg} width="100%" alt="img"></img>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    )
}

export default Plana