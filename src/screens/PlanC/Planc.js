/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from 'react';
import './Planc.css';
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
import Footer from "../../components/Footer/Footer";

const places = [
    {
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118652.48576982656!2d35.05000678923127!3d31.547499537917957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e427ecc463fb%3A0xbe464d5c6a2f134c!2sHebron!5e0!3m2!1sen!2s!4v1703349948762!5m2!1sen!2s",
        "title": "H1 and H2 Zones",
        "content": "Navigate between H1 and H2 zones, each with its unique characteristics. Gain insight into the city's complex political landscape, appreciating the resilience and adaptability of the local population under the occupation in those two zones.",
        "price": "free entry",
        "time": "2h",
        images: [
            IMAGES.Hzonestwo,
            IMAGES.Hzonesone,
            IMAGES.Hzonesthree,
            IMAGES.Hzonesfour,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.3429325684917!2d35.10120158153947!3d31.527327368178966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e5ec2336fd6b%3A0xaa04e409b918340f!2z2KjYp9ioINin2YTYstin2YjZitipIGNpdHkgY2VudGVy!5e1!3m2!1sen!2s!4v1703350038567!5m2!1sen!2s",
        "title": "Bab al-Zawiyeh",
        "content": "Experience the energy of Bab al-Zawiyeh, a central square surrounded by historical buildings. The vibrant market and bustling activity encapsulate Hebron's dynamic spirit, providing a window into the city's cultural and social heartbeat.",
        "price": "free entry",
        "time": "1h",
        images: [
            IMAGES.Babalzawiyehone,
            IMAGES.Babalzawiyehtwo,
            IMAGES.Babalzawiyehthree,
            IMAGES.Babalzawiyehfour,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1081.6221256791243!2d35.10829955748423!3d31.52316775043394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1703353908352!5m2!1sen!2s",
        "title": "Al-Shuhada Street",
        "content": "Walk the storied Al-Shuhada Street, a central artery with a complex history. Despite current restrictions, the street's past significance and the resilience of its inhabitants offer a lens into the challenges and triumphs of Hebron's residents. After the Ibrahimi Mosque massacre at 25th February in 1994 the street has been closed by the occupation forces till now.",
        "price": "free entry",
        "time": "1h",
        images: [
            IMAGES.Alshuhadastreetfour,
            IMAGES.Alshuhadastreettwo,
            IMAGES.Alshuhadastreetthree,
            IMAGES.Alshuhadastreetone,
        ]
    },
];

function Planc() {
    const [openStates, setOpenStates] = React.useState(places.map(() => false));
    const [selectedPlaceIndex, setSelectedPlaceIndex] = React.useState(null);
    const ref = useRef();

    const handleOpen = (index) => {
        setOpenStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? true : state))
        );
        setSelectedPlaceIndex(index);
    };

    const handleClose = () => {
        setOpenStates((prevStates) =>
            prevStates.map((state, i) => (i === selectedPlaceIndex ? false : state))
        );
        setSelectedPlaceIndex(null);
    };

    useEffect(() => {
        setTimeout(() => ref.current.scrollIntoView({ behavior: "smooth" }), 100)
    }, [])

    return (
        <div className="rootBg">
            {/* Navbar */}
            <div ref={ref}></div>
            <ResponsiveAppBar />
            {/* hero Section */}
            <div className="containerSections">
                <div className="heroContent">
                    <div className="heroContentRight">
                        <h1 className="titleA">Plan C</h1>
                        <div className="heroContentRightItems">
                            <div className="leftC">
                                <p>Estimated time</p>
                                <div className="leftIcon">
                                    <AccessTimeIcon sx={{ color: '#F96719' }} />
                                    <p>5 to 6h</p>
                                </div>
                            </div>
                            <div className="RightC">
                                <p>Estimated money </p>
                                <div className="leftIcon">
                                    <PointOfSaleIcon sx={{ color: '#43A047' }} />
                                    <p>8$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="arrow" src={Arrow3} width="20px" alt="img"></img>
                    </div>
                </div>
                {/* startOff Section */}
                <div className="startOff">
                    <h3>Start off</h3>
                    <div>
                        <StartIcon />
                    </div>
                </div>
                {/* Visit places Section */}
                {places.map((place, index) => (
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'start',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div className="mapSection" key={index}>
                            <div>
                                <iframe
                                    className="map"
                                    src={place.map}
                                    width="400"
                                    height="250"
                                    style={{ border: "0", borderRadius: '3%' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="mapContent">
                                <h5>{place.title}</h5>
                                <p>{place.content}</p>
                                <div className="contentWraper">
                                    <div className="insideContentWraper">
                                        <h6>Price</h6>
                                        <p><AttachMoneyIcon sx={{ color: '#267E02' }} />{place.price}</p>
                                    </div>
                                    <div>
                                        <h6>Time</h6>
                                        <p><AccessTimeIcon sx={{ color: '#F96719' }} /> {place.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="imgDiv">
                            <React.Fragment>
                                {place.images.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        className="pointer"
                                        src={img}
                                        width="150px"
                                        alt="img"
                                        onClick={() => handleOpen(index)}
                                    ></img>
                                ))}

                                <Dialog
                                    open={openStates[index]}
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
                                            {/* the images when I click on the image */}
                                            {place.images.map((img, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    className="marginImg"
                                                    src={img}
                                                    width="100%"
                                                    alt="img"
                                                ></img>
                                            ))}
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Close</Button>
                                    </DialogActions>
                                </Dialog>
                            </React.Fragment>
                        </div>
                        <hr
                            style={{
                                color: '#777777',
                                backgroundColor: '#777777',
                                height: 1.4,
                                width: '60%',
                                marginTop: '40px',
                            }}
                        />
                    </Box>
                ))}
            </div>
            <div class="note">
                <p><strong>note:</strong><br /><strong>1.</strong> The time to complete the trip might vary depending on the traffic conditions<br /><strong>2.</strong> The suggested listed prices reflect the booking fees and does not necessarily include any additional purchase.</p>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default Planc;