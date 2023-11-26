/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Logo from '../../img/Logo.svg'

const Header = () => {
    const navigate = useNavigate();
    const redirectLogo = () => {
        navigate(`/`)
    }

    return (
        <div class="root">
            <div class="logo">
                <img src={Logo} width="200px" alt="img" onClick={redirectLogo}></img>
            </div>
            <div class="div">
                <ul class="links">
                    <li class="link"><NavLink
                        className="link1"
                        style={{
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            color: '#000'
                        }}
                        to="/">Home</NavLink></li>
                    <li class="link">
                        <NavLink to="ask-me">
                            <Button
                                variant="contained"
                                disableRipple
                                size="small"
                                sx={{
                                    bgcolor: '#463DCF',
                                    textTransform: 'none',
                                    fontSize: '1.2rem',
                                    borderRadius: '50px',
                                    padding: '5px 15px',
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