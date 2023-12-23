/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from 'react';
import './Planb.css';
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
        "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3401.0246577848725!2d35.103012655326644!3d31.523482706543785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e42261a1538f%3A0xaf4b9b9487fc56d9!2sTel%20Rumeida!5e0!3m2!1sen!2s!4v1703200946926!5m2!1sen!2s",
        "title": "Tel Rumeida",
        "content": "Tel Rumeida also known as Jabla al-Rahama is an archaeological, agricultural and residential area in the West Bank city of Hebron. Within it, lies a tell whose remains go back to the Chalcolithic period, and is thought to constitute the Canaanite era 4500 years ago.",
        "price": "free entry",
        "time": "1h",
        images: [
            IMAGES.Telrumeidaone,
            IMAGES.Telrumeidatwo,
            IMAGES.Telrumeidathree,
            IMAGES.Telrumeidafour,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.2453754741903!2d35.10975841733638!3d31.5246680025358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e41c1ec1f1bb%3A0xf50b20561ca781c3!2sIbrahimi%20Mosque!5e0!3m2!1sen!2s!4v1703199675148!5m2!1sen!2s",
        "title": "Al Takiyya",
        "content": "is a charitable organization located near the Ibrahimi Mosque that provides free food to the poor and needy families throughout the year, especially in the month of Ramadan, which made the city of Hebron gain widespread fame as “the city that never knows hunger” or “A city where no person sleeps with hunger”. The history of this hospice dates back to the year 1279 AD, when it was established by Sultan Qalun al-Salihi during the time of Saladin al-Ayyubi. The people of Hebron say that the history of the hospice (Al-Zawiya) dates back to the era of the Prophet Ibrahim, who was described as “the father of the two guests”. He would only eat with a guest and would provide food to passers-by from the same place where the hospice distributes food these days.",
        "price": "free",
        "time": "40m",
        images: [
            IMAGES.Altakiyyaone,
            IMAGES.Altakiyyatwo,
            IMAGES.Altakiyyathree,
            IMAGES.Altakiyyafour,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.7817750229023!2d35.10533274529724!3d31.52581759605345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e5f595fa7009%3A0x8220bc0a838701a9!2z2YHZhtiv2YIg2YHZhNiz2LfZitmG!5e1!3m2!1sen!2s!4v1703346101610!5m2!1sen!2s",
        "title": "Old City Museum",
        "content": "Palestine Hotel is ahistorical building stands at the entrance of the Old City in Hebron, Every visitor entering or exiting the  Old City stands to admire its beauty, wondering about its history and use. in 1948 it did shut down due to the war and ethnic cleansing against the Palestinian, but in 14 October 2021, UNESCO and Hebron Rehabilitation Committee (HRC), celebrated the inauguration of the Old Hebron Museum after completing the rehabilitation of the abandoned historic building of “Palestine Hotel”.",
        "price": "free",
        "time": "30m",
        images: [
            IMAGES.Oldcitymuseumfour,
            IMAGES.Oldcitymuseumone,
            IMAGES.Oldcitymuseumthree,
            IMAGES.Oldcitymuseumtwo,
        ]
    },
    {
        "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d573.4361621249843!2d35.08514573737559!3d31.537373247933974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e68032b08b7d%3A0x9036dbe92b030019!2zVGhlIENhdGhlZHJhbCBvZiB0aGUgSG9seSBUcmluaXR5IC0g2YPYp9iq2K_Ysdin2KbZitipINin2YTYq9in2YTZiNirINin2YTYo9mC2K_Ysw!5e1!3m2!1sen!2sus!4v1703202971932!5m2!1sen!2sus",
        "title": "Al Maskobiya",
        "content": "A tranquil spot steeped in legend, believed to be where the prophet Abraham set up his tent. Embrace the serenity and reflect on the historical significance of this ancient tree, a symbol of enduring spirituality. and The Church of the Holy Forefathers and Monastery of the Holy Trinity also known as Al Maskobiya, is a Russian Orthodox monastery and church in Hebron, Palestine, founded in the 20th century on the site of the ancient Oak of Mamre.",
        "price": "free entry",
        "time": "1h",
        images: [
            IMAGES.Almaskobiyaone,
            IMAGES.Almaskobiyatwo,
            IMAGES.Almaskobiyathree,
            IMAGES.Almaskobiyafour,
        ]
    },
];

function Planb() {
    const [openStates, setOpenStates] = React.useState(places.map(() => false));
    const [selectedPlaceIndex, setSelectedPlaceIndex] = React.useState(null);

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

    return (
        <div className="rootBg">
            {/* Navbar */}
            <ResponsiveAppBar />
            {/* hero Section */}
            <div className="containerSections">
                <div className="heroContent">
                    <div className="heroContentRight">
                        <h1 className="titleA">Plan B</h1>
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
                                    <p>FREE</p>
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
                <p><strong>note:</strong><br /><strong>1.</strong> you can modify the plan as you wish <br /><strong>2.</strong> put in mind the road could be crowded<br /><strong>3.</strong> the price might change simultaneously with your purchases</p>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default Planb;