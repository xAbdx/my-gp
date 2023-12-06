import React from 'react'
import './Plana.css'
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Arrow3 from '../../img/ArrowPlan.svg';
import StartIcon from '@mui/icons-material/Start';

function Plana() {
    return (
        <div class="rootBg">
            <ResponsiveAppBar />
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
            <div class="startOff">
                <h3>Start off</h3>
                <div>
                    <StartIcon />
                </div>
            </div>
        </div>
    )
}

export default Plana