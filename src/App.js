import React from 'react';
import Home from './index.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
function App()
{
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>  
        </Router>
    );
}