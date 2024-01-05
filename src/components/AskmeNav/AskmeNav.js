import * as React from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import './AskmeNav.css';
import IMAGES from '../../img/indexImg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages = [
    <NavLink
        style={{
            textDecoration: 'none',
            color: '#000'
        }}
        to="/">
        Home
    </NavLink>,
    <NavLink
        style={{
            textDecoration: 'none',
            color: '#000'
        }}
        to="/ask-me">
        Ask Me
    </NavLink>
];

const drawerWidth = 240;

function AskmeNav(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const navigate = useNavigate();
    const redirectLogo = () => {
        navigate(`/`)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img class="logo" src={IMAGES.Logo} width="200px" alt="img" onClick={redirectLogo}></img>
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: "inherit" }} elevation={0} disableRipple>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img class="logo" src={IMAGES.Askmenavlogo} width="200px" alt="img" onClick={redirectLogo}></img>
                        <Box className="rooted" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <div></div>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="#D9D9E3"
                                sx={{ display: 'flex', justifyContent: "flex-end", color: "#D9D9E3" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                            <div></div>
                        </Box>
                        <Box className="rooted" sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <ul class="links">
                                <li class="link">
                                    <NavLink
                                        className="link2"
                                        style={{
                                            textDecoration: 'none',
                                            fontSize: '1.2rem',
                                            fontWeight: '500',
                                            color: '#D9D9E3'
                                        }}
                                        to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li class="link">
                                    <NavLink to="/ask-me">
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
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </div>
    );
}
export default AskmeNav;