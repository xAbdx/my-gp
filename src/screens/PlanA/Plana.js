/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from 'react';
import './Plana.css';
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
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9884008118115!2d35.1079238669784!3d31.524478523397136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e41c1ec1f1bb%3A0xf50b20561ca781c3!2sIbrahimi%20Mosque!5e0!3m2!1sen!2s!4v1701627915571!5m2!1sen!2s",
        "title": "Ibrahimi Mosque",
        "content": "Al Ibrahimi Mosque is the world's oldest sacred building still in use today in a practically continuous manner. It is believed to hold the remains of God's prophet Abraham, his wife Sarah, their son Isaac and grandson Jacob, and their wives Rebecca and Leah. The structure is a large rectangular building with a facade that blends elements of Mamluk, Ottoman, architectural styles. After the zionist ouccupy Palestin the Jews separate the mosque into two main sections—one for Jewish worship and the other for Muslim worship—divided by a central wall. The respective prayer areas are adorned with intricate decorations and motifs, reflecting the cultural and religious heritage of the region.",
        "price": "free entry",
        "time": "1h",
        images: [
            IMAGES.IbrahimiOne,
            IMAGES.IbrahimiTwo,
            IMAGES.IbrahimiThree,
            IMAGES.IbrahimiFour,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d425.5342237595399!2d35.11044590689754!3d31.524560021135233!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1703110770572!5m2!1sen!2s",
        "title": "Cave of the Patriarchs",
        "content": "Over the cave stands a large rectangular enclosure. During Byzantine rule of the region, a Christian basilica was built on the site; the structure was converted into the Ibrahimi Mosque following the Muslim conquest of the Levant. By the 12th century, the mosque and its surrounding regions had fallen under Crusader-state control, but were retaken in 1188 by the Ayyubid sultan Saladin, who again converted the structure into a mosque till now.",
        "price": "free entry",
        "time": "20m",
        images: [
            IMAGES.Caveone,
            IMAGES.Cavetwo,
            IMAGES.Cavethree,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d850.2409235205233!2d35.10772340380069!3d31.525157090571568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1703077506291!5m2!1sen!2s",
        "title": "Old city in Hebron",
        "content": "Hebron’s old City is located adjacent to the Ibrahimi Mosque. The place is about winding alleys; old houses; shops, and markets which make it worth visiting.  Unfortunately Israeli Authorities have shut down large parts of it and deploy Israeli troops to protect the presence of the Jews who seek to control the real estate in that area.",
        "price": "free entry",
        "time": "2h",
        images: [
            IMAGES.Oldcityone,
            IMAGES.Oldcitytwo,
            IMAGES.Oldcitythree,
            IMAGES.Oldcityfour,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1459.1387032484254!2d35.10747674579247!3d31.525074830456223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e5909847e89b%3A0x6a79fbabf5346549!2z2YXYtdmG2Lkg2KPYsdi2INmD2YbYudin2YYg2YTZhNiy2KzYp9isINin2YTZitiv2YjZig!5e1!3m2!1sen!2s!4v1703112304495!5m2!1sen!2s",
        "title": "Glass and Ceramic Factories",
        "content": "Hebron is well known as a place to produce glass and ceramic manually which dates back to the era of Roman rule over Palestine 500 years ago. The tourists seek to buy these antiques and gifts from one of these factories which represents the heritage of the city. The industry relies on local raw materials, which are often of glass waste which is obtained from vendors who collect empty soda water bottles or glass dealers. Most of these factories located near the entrance of the city at your right side. You can buy items that designed for Christmas as well as Various handicraft works by less than 7 American dollars.",
        "price": "10",
        "time": "30m",
        images: [
            IMAGES.Glassone,
            IMAGES.Glasstwo,
            IMAGES.Glassthree,
            IMAGES.Glassfour,
        ]
    },
];

function Plana() {
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
                        <h1 className="titleA">Plan A</h1>
                        <div className="heroContentRightItems">
                            <div className="leftC">
                                <p>Estimated time</p>
                                <div className="leftIcon">
                                    <AccessTimeIcon sx={{ color: '#F96719' }} />
                                    <p>4 to 5h</p>
                                </div>
                            </div>
                            <div className="RightC">
                                <p>Estimated money </p>
                                <div className="leftIcon">
                                    <PointOfSaleIcon sx={{ color: '#43A047' }} />
                                    <p>10$</p>
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

export default Plana;