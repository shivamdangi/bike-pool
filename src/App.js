import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PGList from './components/PGList';
import Header from './components/Header';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pg-list" element={<PGList />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;