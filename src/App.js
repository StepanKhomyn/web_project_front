import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import RegisterPage from './pages/registration/RegisterPage';
import CarsList from './pages/cars-list/CarsList';
import Header from './pages/Header';
import AboutCar from './pages/about/AboutCar';
import SellCar from './pages/sellCar/SellCar';
import MyCar from './pages/sellCar/MyCar';
import Favourites from './pages/favourites/Favourites';
import Messages from './pages/messages/Messages';
import Profile from './pages/profile/Profile';
import Menu from './pages/cars-list/components/Menu';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        
        setIsLoggedIn(false);
    };

    return (
        <div>
            
           

            <Routes>
                <Route path="/" element={<CarsList />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutCar />} />
                <Route path="/sell" element={<SellCar />} />
                <Route path="/mycar" element={<MyCar />} />
                <Route path="/favourites" element={<Favourites/>} />
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;
