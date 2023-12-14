/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from 'react';
import './Plana.css'
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Arrow3 from '../../img/ArrowPlan.svg';
import StartIcon from '@mui/icons-material/Start';
import Box from '@mui/material/Box';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IMAGES from '../../img/indexImg';

const imgs = [
    IMAGES.IbrahimiOne,
    IMAGES.IbrahimiTwo,
    IMAGES.IbrahimiThree,
    IMAGES.IbrahimiFour,
];

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
            <div class="containerSections">
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
                {/* Visit places Section */}
                <Box sx={{
                    width: '100%',
                    minHeight: '700px',
                    display: 'flex',
                    justifyContent: 'start',
                    paddingTop: '50px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: '70px'
                }}>
                    <div class="mapSection">
                        <div>
                            <iframe
                                class="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9884008118115!2d35.1079238669784!3d31.524478523397136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e41c1ec1f1bb%3A0xf50b20561ca781c3!2sIbrahimi%20Mosque!5e0!3m2!1sen!2s!4v1701627915571!5m2!1sen!2s"
                                width="400"
                                height="250"
                                style={{ border: "0", borderRadius: '3%' }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div class="mapContent">
                            <h5>Ibrahimi Mosque</h5>
                            <p>Al Ibrahimi Mosque is the world's oldest sacred building still in use today in a practically continuous manner. It is believed to hold the remains of God's prophet Abraham, his wife Sarah, their son Isaac and grandson Jacob, and their wives Rebecca and Leah</p>
                            <div class="contentWraper">
                                <div class="insideContentWraper">
                                    <h6>Price</h6>
                                    <p><AttachMoneyIcon sx={{ color: '#267E02' }} />free entry</p>
                                </div>
                                <div>
                                    <h6>Time</h6>
                                    <p><AccessTimeIcon sx={{ color: '#F96719' }} /> 1h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fragment img Section */}
                    <div class="imgDiv">
                        <React.Fragment>
                            {imgs.map((img) => (
                                <img class="pointer" src={img} width="150px" alt="img" onClick={handleClickOpen}></img>
                            ))}
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
                                        {imgs.map((img) => (
                                            <img class="marginImg" src={img} width="100%" alt="img" ></img>
                                        ))}
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    </div>

                    <hr style={{
                        color: '#777777',
                        backgroundColor: '#777777',
                        height: 1.4,
                        width: '60%',
                        marginTop: '40px'
                    }} />
                </Box>
            </div>
        </div>
    )
}

export default Plana