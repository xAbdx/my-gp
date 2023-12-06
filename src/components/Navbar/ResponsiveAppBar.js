import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../img/logo.svg'
import SendIcon from '@mui/icons-material/Send';
import { useNavigate, NavLink } from "react-router-dom";
import './ResponsiveAppBar.css';

const pages = [
    <NavLink to="/">Home</NavLink>,
    <NavLink to="ask-me">Ask Me</NavLink>
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();
    const redirectLogo = () => {
        navigate(`/`)
    }

    return (
        <AppBar position="static" sx={{ bgcolor: "inherit" }} elevation={0} disableRipple>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img class="logo" src={Logo} width="200px" alt="img" onClick={redirectLogo}></img>
                    <Box className="root" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <div></div>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#000"
                            sx={{ display: 'flex', justifyContent: "flex-end" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>
                            {pages.map((page) => (
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                        <div></div>
                    </Box>
                    <Box className="root" sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;