import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <Container className="admin-panel">
            <Typography variant="h4" gutterBottom>
                Admin Panel
            </Typography>
            {/* Admin functionalities for managing PG/Hostels */}
        </Container>
    );
};

export default AdminPanel;