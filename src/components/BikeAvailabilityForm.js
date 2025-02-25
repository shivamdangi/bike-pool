import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './BikeAvailabilityForm.css';

const BikeAvailabilityForm = ({ onSubmit }) => {
    const [ownerName, setOwnerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [destination, setDestination] = useState('');
    const [charges, setCharges] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            ownerName,
            contactNumber,
            destination,
            charges,
        });
        // Clear form fields
        setOwnerName('');
        setContactNumber('');
        setDestination('');
        setCharges('');
    };

    return (
        <form onSubmit={handleSubmit} className="bike-availability-form">
            <TextField
                fullWidth
                variant="outlined"
                label="Name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                required
                margin="normal"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                margin="normal"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Destination Office Address"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                margin="normal"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Charges"
                value={charges}
                onChange={(e) => setCharges(e.target.value)}
                required
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Post
            </Button>
        </form>
    );
};

export default BikeAvailabilityForm;