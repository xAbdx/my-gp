/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
    const navigate = useNavigate();
    const redirectLogo = () => {
        navigate(`/`)
    }

    return (
        <div class="root">
            <div class="logo">
                <h1 onClick={redirectLogo}>LOGO</h1>
            </div>
            <div class="div">
                <ul class="links">
                    <li class="link"><a><NavLink to="/">Home</NavLink></a></li>
                    <li class="link">
                        <NavLink to="ask-me">
                            <Button
                                variant="contained"
                                disableRipple

                                size="small"
                                sx={{
                                    bgcolor: '#463DCF',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    borderRadius: '15px',
                                    "&:hover": { bgcolor: '#463DCF' }
                                }}
                                endIcon={<SendIcon />}>
                                Ask Me
                            </Button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;