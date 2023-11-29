import React, { useRef } from 'react';
import './Home.css';
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import Arrow from '../../img/Arrow.svg';
import Lottie from "lottie-react";
import animationData from "../../assets/Animation-picnic.json"
import Box from '@mui/material/Box';
// import Footer from "../../components/footer/footer";


const Home = () => {
    const picnicRef = useRef();
    return (
        <div>
            <ResponsiveAppBar />
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <div class="smaller">
                    <div class="left">
                        <p class="title">Lost in Hebron?</p>
                        <span class="text">Here are some plans for your journey<br /> Enjoy..</span>
                        <div class="arrowDiv">
                            <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
                                <img class="arrow" src={Arrow} width="10px" alt="img"></img>
                                <p class="textArrow">scroscroll down</p>
                            </Box>
                        </div>
                    </div>
                    <div class="rightSmaller">
                        <Lottie LottieRef={picnicRef} animationData={animationData} />
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
                        </div>
                    </div>
                    <div class="right">
                        <Lottie LottieRef={picnicRef} animationData={animationData} />
                    </div>
                </div>
            </Box>
            {/* <Footer /> */}
        </div>
    );
}
export default Home;