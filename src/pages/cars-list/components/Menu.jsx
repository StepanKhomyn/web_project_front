import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SellIcon from '@mui/icons-material/Sell';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "../CarsList.css"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = () => {

  const localStorageBooll = localStorage.getItem('menuOpenLeft') === "false" ? false : true

  const [menuOpen, setMenuOpen] = useState(localStorageBooll);
  
  useEffect(() => {
    window.localStorage.setItem('menuOpenLeft', menuOpen);
  }, [menuOpen]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  const location = useLocation();
  const isActivePage = (path) => location.pathname === path;

  return (
    <> {menuOpen ? <TransitEnterexitIcon className="rst--exit" onClick={toggleMenu} /> : <ArrowOutwardIcon className="rst--exit" onClick={toggleMenu} />}
      <div className={`right--menu ${menuOpen ? 'active' : ''}`}>
        <div className="logo-rst-exit" >
          <h1 className="rst" >RST</h1>

        </div>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/home') ? 'selected' : ''}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/home') ? '#fff' : '#7C7C7C' }} >
                <HomeIcon style={{ marginRight: 10 }} /> Home
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link" >
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/dealerships') ? 'selected' : ''}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/dealerships') ? '#fff' : '#7C7C7C' }} >
                <HomeRepairServiceIcon style={{ marginRight: 10 }} /> Car Dealerships
              </div>
            </button>
          </div>
        </Link>
        <Link to="/" className="link">
          <div className="right--menu--btn">
            <button className={`home ${isActivePage('/') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/') ? '#fff' : '#7C7C7C' }}>
                <DirectionsCarIcon style={{ marginRight: 10 }} /> Car Market
              </div>
            </button>
          </div>
        </Link>
        <Link to="/sell" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/sell') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/sell') ? '#fff' : '#7C7C7C' }}>
                <SellIcon style={{ marginRight: 10 }} /> Sell a Car
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/carExchange') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/carExchange') ? '#fff' : '#7C7C7C' }} >
                <ChangeCircleIcon style={{ marginRight: 10 }} /> Car Exchange
              </div>
            </button>
          </div>
        </Link>
        <Link to="/mycar" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/mycar') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/mycar') ? '#fff' : '#7C7C7C' }} >
                <RecordVoiceOverIcon style={{ marginRight: 10 }} /> My Car
              </div>
            </button>
          </div>
        </Link>
        <Link to="/messages" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/messages') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/messages') ? '#fff' : '#7C7C7C' }}  >
                <NewspaperIcon style={{ marginRight: 10 }} /> Messages
              </div>
            </button>
          </div>
        </Link>
        <Link to="/favourites" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/favourites') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/favourites') ? '#fff' : '#7C7C7C' }}  >
                <ReviewsIcon style={{ marginRight: 10 }} /> Favourites
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/autositeRatings') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/autositeRatings') ? '#fff' : '#7C7C7C' }}>
                <TrendingUpIcon style={{ marginRight: 10 }} /> Autosite Rating
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className={`home ${isActivePage('/setting') ? 'selected' : 'white'}`}>
              <div className="right--menu--button" style={{ color: isActivePage('/setting') ? '#fff' : '#7C7C7C' }}>
                <SettingsIcon style={{ marginRight: 10 }} /> Setting
              </div>
            </button>
          </div>
        </Link>

        <div className="logout">
          <Link to="/login" className="link">
            <div className="right--menu--btn" style={{ marginTop: "20px" }} >
              <button className="home">
                <div className="right--menu--button" >
                  <LogoutIcon style={{ marginRight: 10 }} /> Logout
                </div>
              </button>
            </div>
          </Link>
          <div className="post">
            <div className="post--text">
              <p className="post--text-add"><b>Post an add,</b>  free,<br /> without registration!</p>
            </div>
            <div>
              <button className="post--btn" >+ Post ad</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu