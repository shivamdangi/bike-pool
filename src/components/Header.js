import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="title">
                    Bike-Pool
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/pg-list">
                    PG/Hostels
                </Button>
                <Button color="inherit" component={Link} to="/admin">
                    Admin
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;