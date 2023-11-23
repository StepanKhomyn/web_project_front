import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import Reviews from './pages/reviews/Reviews';


function App() {
    const { isAuth } = useSelector((state) => state.FilterReducer);

    


    return (
        <div>
            {/* Your header or other common components go here */}

            <Routes>
                {/* Redirect to login if not authenticated */}
                {!isAuth && <Route path="/" element={<Navigate to="/login" />} />}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Check if user is authenticated */}
                {isAuth ? (
                    <>
                        <Route path="/" element={<CarsList />} />
                        <Route path="/about" element={<AboutCar />} />
                        <Route path="/sell" element={<SellCar />} />
                        <Route path="/mycar" element={<MyCar />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/reviews" element={<Reviews />} />
                    </>
                ) : (
                    <Route path="*" element={<LoginPage />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
