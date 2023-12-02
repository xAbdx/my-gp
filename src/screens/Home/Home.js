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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
// import Footer from "../../components/footer/footer";


const Home = () => {
    const picnicRef = useRef();

    return (
        <div>
            <ResponsiveAppBar />
            <div class="containerHero">
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <div class="smaller">
                        <div class="left">
                            <p class="titleSmall">Lost in Hebron?</p>
                            <span class="textSmall">Here are some plans for your journey<br /> Enjoy..</span>
                            <div class="arrowDiv">
                                <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
                                    <img class="arrow" src={Arrow} width="10px" alt="img"></img>
                                    <p class="textArrow">scroscroll down</p>
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
                                    <p class="textArrow">scroscroll down</p>
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
                            <Lottie LottieRef={picnicRef} animationData={animationData} />
                        </div>
                    </div>
                </Box>
                <div class="cardSection">
                    <Card sx={{ maxWidth: '250px', bgcolor: '#F8F8F8', marginTop: '40px' }}>
                        <CardContent>
                            <Typography variant="h3" component="div" sx={{
                                fontWeight: 'bold',
                            }}>
                                <TravelExploreIcon fontSize="larger" sx={{ color: '#463DCF' }} />
                                Plan A
                            </Typography>
                            <div class="cardCards">
                                <Card sx={{ width: '40%', bgcolor: '#F1F1F1' }}>
                                    <CardContent>
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
                                </Card>
                                <Card sx={{ width: '40%', bgcolor: '#F1F1F1' }}>
                                    <CardContent>
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
                                </Card>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" endIcon={<ChevronRightIcon />}>Learn More </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: '250px', bgcolor: '#F8F8F8', marginTop: '40px' }}>
                        <CardContent>
                            <Typography variant="h3" component="div" sx={{
                                fontWeight: 'bold',
                            }}>
                                <TravelExploreIcon fontSize="larger" sx={{ color: '#463DCF' }} />
                                Plan A
                            </Typography>
                            <div class="cardCards">
                                <Card sx={{ width: '40%', bgcolor: '#F1F1F1' }}>
                                    <CardContent>
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
                                </Card>
                                <Card sx={{ width: '40%', bgcolor: '#F1F1F1' }}>
                                    <CardContent>
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
                                </Card>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" endIcon={<ChevronRightIcon />}>Learn More </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: '250px', bgcolor: '#F8F8F8', marginTop: '40px' }}>
                        <CardContent>
                            <Typography variant="h3" component="div" sx={{
                                fontWeight: 'bold',
                            }}>
                                <TravelExploreIcon fontSize="larger" sx={{ color: '#463DCF' }} />
                                Plan A
                            </Typography>
                            <div class="cardCards">
                                <Card sx={{ width: '40%', bgcolor: '#F1F1F1' }}>
                                    <CardContent>
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
                                </Card>
                                <Card sx={{ width: '40%', bgcolor: '#F1F1F1' }}>
                                    <CardContent>
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
                                </Card>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" endIcon={<ChevronRightIcon />}>Learn More </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            {/* <Footer /> */}

        </div>
    );
}
export default Home;

{/* <Box>
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
</Box> */}