import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import RegisterPage from './pages/registration/RegisterPage';
import CarsList from './pages/cars-list/CarsList';
import Header from './pages/Header';
import AboutCar from './pages/about/AboutCar';
import SellCar from './pages/sellCar/SellCar';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Implement your logout logic here
        setIsLoggedIn(false);
    };

    return (
        <div>
            {/* Include the Header component */}
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

            <Routes>
                <Route path="/" element={<CarsList />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutCar/>} />
                <Route path="/sell" element={<SellCar/>} />
            </Routes>
        </div>
    );
}

export default App;
