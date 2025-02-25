import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Home.css';

const Home = () => {
    return (
        <Container className="home-container">
            <Typography variant="h3" gutterBottom>
                Welcome to Bike-Pool
            </Typography>
            <Typography variant="body1">
                Find or share bike rides to your office.
            </Typography>
        </Container>
    );
};

export default Home;