import React from 'react'
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
import "../CarsList.css"
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
 /* const dynamicClass = location.pathname === '/sell' ? "selected" : "selectedd";*/
  return (
    <div className="right--menu">
        <div className="logo-rst-exit" >
          <h1 className="rst" >RST</h1>
          <TransitEnterexitIcon className="rst--exit" />
        </div>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <HomeIcon style={{ marginRight: 10 }} /> Home
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link" >
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <HomeRepairServiceIcon style={{ marginRight: 10 }} /> Car Dealerships
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn">
            <button className="home" style={{ backgroundColor: "#282828" }}>
              <div className={`right--menu--button`} style={{ color: "#FFFFFF" }} > {/*  <div className={`right--menu--button ${dynamicClass}`} style={{ color: "#FFFFFF" }} >*/}
                <DirectionsCarIcon style={{ marginRight: 10 }} /> Car Market
              </div>
            </button>
          </div>
        </Link>
        <Link to="sell" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button">
                <SellIcon style={{ marginRight: 10 }} /> Sell a Car
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <ChangeCircleIcon style={{ marginRight: 10 }} /> Car Exchange
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <RecordVoiceOverIcon style={{ marginRight: 10 }} /> Announcements
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <NewspaperIcon style={{ marginRight: 10 }} /> Auto News
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <ReviewsIcon style={{ marginRight: 10 }} /> Reviews
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <TrendingUpIcon style={{ marginRight: 10 }} /> Autosite Rating
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
                <SettingsIcon style={{ marginRight: 10 }} /> Setting
              </div>
            </button>
          </div>
        </Link>

        <div className="logout">
          <Link to="login" className="link">
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
  )
}

export default Menu