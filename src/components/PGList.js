import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import BikeAvailabilityForm from './BikeAvailabilityForm';
import BikePost from './BikePost';
import './PGList.css';

const PGList = () => {
    const [pgs, setPgs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPg, setSelectedPg] = useState(null);
    const [bikePosts, setBikePosts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Fetch PG/Hostel data from the backend when the component mounts
        axios.get('http://localhost:8000/api/pgs')
            .then(response => setPgs(response.data))
            .catch(error => console.error('Error fetching PG/Hostel data:', error));
    }, []);

    useEffect(() => {
        if (selectedPg) {
            // Fetch bike posts for the selected PG
            axios.get(`http://localhost:8000/api/pgs/${selectedPg.id}/bike-posts`)
                .then(response => setBikePosts(response.data))
                .catch(error => console.error('Error fetching bike posts:', error));
        }
    }, [selectedPg]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePgSelect = (pg) => {
        setSelectedPg(pg);
        setShowForm(false);
        setSearchTerm(pg.name);
    };

    const handleBikePostSubmit = (bikePost) => {
        // Submit bike post to the backend
        axios.post(`http://localhost:8000/api/pgs/${selectedPg.id}/bike-posts`, bikePost)
            .then(response => {
                setBikePosts([...bikePosts, response.data]);
                setShowForm(false);
            })
            .catch(error => console.error('Error posting bike availability:', error));
    };

    const filteredPgs = pgs.filter(pg => pg.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="pg-list">
            <Typography variant="h4" gutterBottom>
                PG/Hostel List
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                label="Search PG/Hostel"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
            />
            
            {/* Show the list only when the user starts typing */}
            {searchTerm.trim() !== '' && filteredPgs.length > 0 && (
                <List>
                    {filteredPgs.map(pg => (
                        <ListItem button key={pg.id} onClick={() => handlePgSelect(pg)}>
                            <ListItemText primary={pg.name} />
                        </ListItem>
                    ))}
                </List>
            )}

            {selectedPg && (
                <div className="pg-details">
                    <Typography variant="h5">{selectedPg.name}</Typography>
                    <Typography variant="body1">{selectedPg.address}</Typography>
                    <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
                        Post Bike Availability
                    </Button>
                    {showForm && <BikeAvailabilityForm onSubmit={handleBikePostSubmit} />}
                    <Typography variant="h6" gutterBottom>
                        Bike Posts
                    </Typography>
                    {bikePosts.map((post, index) => (
                        <BikePost key={index} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PGList;
