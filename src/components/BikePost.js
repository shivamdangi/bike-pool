import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './BikePost.css';

const BikePost = ({ post }) => {
    const maskedContactNumber = `${post.contactNumber.slice(0, -5)}*****`;

    const handleConnectClick = () => {
        const whatsappUrl = `https://wa.me/${post.contactNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bike-post">
            <Typography variant="h6">{post.ownerName}</Typography>
            <Typography variant="body1">Contact: {maskedContactNumber}</Typography>
            <Typography variant="body1">Destination: {post.destination}</Typography>
            <Typography variant="body1">Charges: {post.charges}</Typography>
            <Button variant="contained" color="secondary" onClick={handleConnectClick}>
                Connect on WhatsApp
            </Button>
        </div>
    );
};

export default BikePost;