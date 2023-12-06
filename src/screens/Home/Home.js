/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from 'react';
import './Home.css';
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import Arrow from '../../img/Arrow.svg';
import Lottie from "lottie-react";
import animationData from "../../assets/Animation-picnic.json"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const picnicRef = useRef();
    return (
        <div>
            <ResponsiveAppBar />
            {/* Hero Section */}
            <div class="containerHero">
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <div class="smaller">
                        <div class="left">
                            <p class="titleSmall">Lost in Hebron?</p>
                            <span class="textSmall">Here are some plans for your journey<br /> Enjoy..</span>
                            <div class="arrowDiv">
                                <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
                                    <img class="arrow" src={Arrow} width="10px" alt="img"></img>
                                    <p class="textArrow">Scroll down</p>
                                </Box>
                            </div>
                        </div>
                        <div class="rightSmaller">
                            <Lottie LottieRef={picnicRef} animationData={animationData} />
                            <div class="suggested">
                                <span class="suggestedSpan">Suggested plans</span>
                                <div class="sort">
                                    <span>Sort by</span>
                                    <Button
                                        variant="contained"
                                        disableRipple
                                        size="small"
                                        sx={{
                                            bgcolor: '#F2F2F2',
                                            textTransform: 'none',
                                            color: '#000',
                                            borderRadius: '10px',
                                            padding: '5px 15px',
                                            margin: '0 20px 0 0',
                                            "&:hover": { bgcolor: '#E2E2E2' }
                                        }}
                                    >
                                        Money
                                    </Button>
                                    <Button
                                        variant="contained"
                                        disableRipple
                                        size="smaller"
                                        sx={{
                                            bgcolor: '#F2F2F2',
                                            textTransform: 'none',
                                            color: '#000',
                                            borderRadius: '10px',
                                            padding: '5px 15px',
                                            "&:hover": { bgcolor: '#E2E2E2' }
                                        }}
                                    >
                                        Time
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </Box>
                <Box className="bigger" sx={{ display: { md: 'flex', xs: 'none' } }}>
                    <div class="container">
                        <div class="left">
                            <p class="title">Lost in Hebron?</p>
                            <span class="text">Here are some plans for your journey<br /> Enjoy..</span>
                            <div class="arrowDiv">
                                <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
                                    <img class="arrow" src={Arrow} width="10px" alt="img"></img>
                                    <p class="textArrow">Scroll down</p>
                                </Box>
                                <div class="suggested">
                                    <span class="suggestedSpan">Suggested plans</span>
                                    <div class="sort">
                                        <span>Sort by</span>
                                        <Button
                                            variant="contained"
                                            disableRipple
                                            size="small"
                                            sx={{
                                                bgcolor: '#F2F2F2',
                                                textTransform: 'none',
                                                color: '#000',
                                                borderRadius: '10px',
                                                padding: '5px 15px',
                                                margin: '0 20px 0 0',
                                                "&:hover": { bgcolor: '#E2E2E2' }
                                            }}
                                        >
                                            Money
                                        </Button>
                                        <Button
                                            variant="contained"
                                            disableRipple
                                            size="smaller"
                                            sx={{
                                                bgcolor: '#F2F2F2',
                                                textTransform: 'none',
                                                color: '#000',
                                                borderRadius: '10px',
                                                padding: '5px 15px',
                                                "&:hover": { bgcolor: '#E2E2E2' }
                                            }}
                                        >
                                            Time
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <Lottie className='lottieImg' LottieRef={picnicRef} animationData={animationData} />
                        </div>
                    </div>
                </Box>
                {/* Cards Section */}
                <Box sx={{ display: { xs: 'flex', justifyContent: 'center' } }}>
                    <div class="cardSection">
                        <Card sx={{ width: '250px', bgcolor: '#F8F8F8', margin: '40px 40px 40px 0', borderRadius: '10%', boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h3" component="div" sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                }}>
                                    <TravelExploreIcon fontSize="larger" sx={{ color: '#463DCF' }} />
                                    Plan A
                                </Typography>
                                <div class="cardCards">
                                    <div class="cardItem">
                                        <CardContent sx={{ bgcolor: '#F1F1F1', borderRadius: '10%' }}>
                                            <Typography variant="body2" component="div" sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                fontWeight: 'bold'
                                            }}>
                                                <AccessTimeIcon sx={{ color: '#F96719' }} />
                                                3 - 4 h
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <div class="cardItem">
                                        <CardContent sx={{ bgcolor: '#F1F1F1', borderRadius: '10%' }}>
                                            <Typography variant="body2" component="div" sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                fontWeight: 'bold'
                                            }}>
                                                <PointOfSaleIcon sx={{ color: '#43A047' }} />
                                                250 $
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'end' }}>
                                <NavLink to="plan-a">
                                    <Button size="small" endIcon={<ChevronRightIcon />}>Learn More </Button>
                                </NavLink>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: '250px', bgcolor: '#F8F8F8', margin: '40px 40px 40px 0', borderRadius: '10%', boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h3" component="div" sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                }}>
                                    <TravelExploreIcon fontSize="larger" sx={{ color: '#463DCF' }} />
                                    Plan B
                                </Typography>
                                <div class="cardCards">
                                    <div class="cardItem">
                                        <CardContent sx={{ bgcolor: '#F1F1F1', borderRadius: '10%' }}>
                                            <Typography variant="body2" component="div" sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                fontWeight: 'bold'
                                            }}>
                                                <AccessTimeIcon sx={{ color: '#F96719' }} />
                                                3 - 4 h
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <div class="cardItem">
                                        <CardContent sx={{ bgcolor: '#F1F1F1', borderRadius: '10%' }}>
                                            <Typography variant="body2" component="div" sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                fontWeight: 'bold'
                                            }}>
                                                <PointOfSaleIcon sx={{ color: '#43A047' }} />
                                                250 $
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'end' }}>
                                <NavLink to="plan-b">
                                    <Button size="small" endIcon={<ChevronRightIcon />}>Learn More </Button>
                                </NavLink>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: '250px', bgcolor: '#F8F8F8', margin: '40px 40px 40px 0', borderRadius: '10%', boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h3" component="div" sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                }}>
                                    <TravelExploreIcon fontSize="larger" sx={{ color: '#463DCF' }} />
                                    Plan C
                                </Typography>
                                <div class="cardCards">
                                    <div class="cardItem">
                                        <CardContent sx={{ bgcolor: '#F1F1F1', borderRadius: '10%' }}>
                                            <Typography variant="body2" component="div" sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                fontWeight: 'bold'
                                            }}>
                                                <AccessTimeIcon sx={{ color: '#F96719' }} />
                                                3 - 4 h
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <div class="cardItem">
                                        <CardContent sx={{ bgcolor: '#F1F1F1', borderRadius: '10%' }}>
                                            <Typography variant="body2" component="div" sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                fontWeight: 'bold'
                                            }}>
                                                <PointOfSaleIcon sx={{ color: '#43A047' }} />
                                                250 $
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'end' }}>
                                <NavLink to="plan-c">
                                    <Button size="small" endIcon={<ChevronRightIcon />}>Learn More </Button>
                                </NavLink>
                            </CardActions>
                        </Card>
                    </div>
                </Box>
            </div>
            {/* Must-Visit Section */}
            <Box sx={{
                width: '100%',
                minHeight: '700px',
                bgcolor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'start',
                paddingTop: '50px',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '70px'
            }}>
                <p class="titleSThree">Must-visit attractions</p>
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
                <hr style={{
                    color: '#777777',
                    backgroundColor: '#777777',
                    height: 1.4,
                    width: '60%',
                    marginTop: '40px'
                }} />
                <div class="mapSection">
                    <div>
                        <iframe
                            class="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9828599193343!2d35.10678373802149!3d31.52463070444061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e70bd58ecbd5%3A0x4ea883b874c58383!2sHebron%20Tourism!5e0!3m2!1sen!2s!4v1701699587789!5m2!1sen!2s"
                            width="400"
                            height="250"
                            style={{ border: "0", borderRadius: '3%' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div class="mapContent">
                        <h5>Old city</h5>
                        <p>it's a historically rich area known for its ancient architecture, bustling markets, and religious significance. It houses the Ibrahimi Mosque, a revered site for Muslims, and boasts narrow, winding streets filled with shops, eateries, and cultural heritage.</p>
                        <div class="contentWraper">
                            <div class="insideContentWraper">
                                <h6>Price</h6>
                                <p><AttachMoneyIcon sx={{ color: '#267E02' }} />free entry</p>
                            </div>
                            <div>
                                <h6>Time</h6>
                                <p><AccessTimeIcon sx={{ color: '#F96719' }} /> 3h</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{
                    color: '#777777',
                    backgroundColor: '#777777',
                    height: 1.4,
                    width: '60%',
                    marginTop: '40px'
                }} />
                <div class="mapSection">
                    <div>
                        <iframe
                            class="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.261093249257!2d35.08331838985911!3d31.537280831870877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e68032b08b7d%3A0x9036dbe92b030019!2zVGhlIENhdGhlZHJhbCBvZiB0aGUgSG9seSBUcmluaXR5IC0g2YPYp9iq2K_Ysdin2KbZitipINin2YTYq9in2YTZiNirINin2YTYo9mC2K_Ysw!5e0!3m2!1sen!2s!4v1701699749907!5m2!1sen!2s"
                            width="400"
                            height="250"
                            style={{ border: "0", borderRadius: '3%' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div class="mapContent">
                        <h5>The Cathedral of the
                            Holy Trinity</h5>
                        <p>The Church of the Holy Forefathers and Monastery of the Holy Trinity also known as Al Maskobiya, is a Russian Orthodox monastery and church in Hebron, Palestine, founded in the 20th century on the site of the ancient Oak of Mamre.</p>
                        <div class="contentWraper">
                            <div class="insideContentWraper">
                                <h6>Price</h6>
                                <p><AttachMoneyIcon sx={{ color: '#267E02' }} />free entry</p>
                            </div>
                            <div>
                                <h6>Time</h6>
                                <p><AccessTimeIcon sx={{ color: '#F96719' }} /> 30m</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            {/* Footer Section */}
            <Footer />
        </div>
    );
}
export default Home;