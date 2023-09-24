import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import RegisterPage from './pages/registration/RegisterPage';
import CarsList from './pages/cars-list/CarsList';
import Header from './pages/Header';

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
            </Routes>
        </div>
    );
}

export default App;
