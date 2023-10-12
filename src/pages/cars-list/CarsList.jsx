import React, { useState } from "react";
import "./CarsList.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import AtmIcon from '@mui/icons-material/Atm';
import {
  IconButton,
  Avatar,
} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Link } from "react-router-dom";

const carData = [
  {
    id: 1,
    name: "Tesla Model X 2022",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
  },
  {
    id: 2,
    name: "Volkswagen Passat 2020",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
  },
  {
    id: 3,
    name: "Volkswagen Tiguan 2022",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
  },
  {
    id: 4,
    name: "Car 4",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp",
  },
  {
    id: 5,
    name: "Car 5",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
  },
  {
    id: 6,
    name: "Car 6",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
  },
];

const CarsList = () => {
  return (
    <div className="carsList--page">
      <div className="right--menu">
        <div className="logo-rst-exit" >
          <h1 className="rst" >RST</h1>
          <TransitEnterexitIcon className="rst--exit"/>
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
              <div className="right--menu--button" style={{ color: "#FFFFFF" }} >
                <DirectionsCarIcon style={{ marginRight: 10 }} /> Car Market
              </div>
            </button>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="right--menu--btn" >
            <button className="home">
              <div className="right--menu--button" >
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
          <Link to="" className="link">
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
      <div className="left--menu">
        <div className="fiteres--menu">
          <div>
            <h2 className="filteres" >Filters</h2>
          </div>
          <div>
            <CloseIcon className="close--icon" />
          </div>
        </div>
        <div className="right-menu-list">
          <div>
            <button className="all--cards" >All cars</button>
          </div>
          <div>
            <button className="btn--used" > Used</button>
          </div>
          <div>
            <button className="btn--used" >All</button>
          </div>
        </div>
        <div className="exchange--menu">
          <label class="form-control">
            <input className="checkbox-exchange" type="checkbox" name="checkbox" />
            Exchange
          </label>
        </div>
        <div className="line--one"></div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Type of vehicle</h5>
          <select className="filter--select">
            <option value="option1">All types</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 style={{ margin: "18px 0px 8px 0px" }} className="filter--select--text">Car brand</h5>
          <select className="filter--select">
            <option value="option1">All brand</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Car model</h5>
          <select className="filter--select">
            <option value="option1">All model</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="line--one"></div>
        <h3 className="type--of--car">Type of car</h3>
        <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ flex: "45%", marginBottom: "6px" }}>
            <label className="form-control--four">
              <input className="checkbox-exchange" type="checkbox" name="checkbox" />
              Sedan
            </label>
          </div>
          <div style={{ flex: "45%", marginBottom: "6px" }}>
            <label className="form-control--four">
              <input className="checkbox-exchange" type="checkbox" name="checkbox" />
              Minivan
            </label>
          </div>
          <div style={{ flex: "45%" }}>
            <label className="form-control--four">
              <input className="checkbox-exchange" type="checkbox" name="checkbox" />
              SUV pickup
            </label>
          </div>
          <div style={{ flex: "45%" }}>
            <label className="form-control--four">
              <input className="checkbox-exchange" type="checkbox" name="checkbox" />
              Microvan
            </label>
          </div>
        </div>
        <h3 className="view--all--types">View all types</h3>

        <div className="line--one"></div>
        <div className="price-filter">
          <div>
            <h5 className="price--from--text">Price from</h5>
            <input placeholder="Price from" className="price--from--input" />
          </div>
          <div >
            <h5 className="price--from--text">Price to</h5>
            <input placeholder="Price to" className="price--from--input" />
          </div>
        </div>
        <div className="line--one"></div>
        <div className="price-filter">
          <div>
            <h5 className="price--from--text">Year from</h5>
            <input placeholder="Year from" className="price--from--input" />
          </div>
          <div >
            <h5 className="price--from--text">Year to</h5>
            <input placeholder="Year to" className="price--from--input" />
          </div>
        </div>
        <div className="line--one"></div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Region</h5>
          <select className="filter--select">
            <option value="option1">All region</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>State</h5>
          <select className="filter--select">
            <option value="option1">All state</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="line--one"></div>
        <h3 className="type--of--car">Additional filters</h3>
        <div className="additional--filter-two">
          <div className="">
            <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Engine from</h5>
            <select className="additional-select">
              <option value="option1">-</option>
              <option value="option2">Варіант 2</option>
              <option value="option3">Варіант 3</option>
            </select>
          </div>
          <div className="">
            <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Engine  to</h5>
            <select className="additional-select">
              <option value="option1">-</option>
              <option value="option2">Варіант 2</option>
              <option value="option3">Варіант 3</option>
            </select>
          </div>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Fuel</h5>
          <select className="filter--select">
            <option value="option1">-</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Checkpoint</h5>
          <select className="filter--select">
            <option value="option1">-</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Drive unit</h5>
          <select className="filter--select">
            <option value="option1">-</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
        <div className="filter--select-all" style={{ marginBottom: "40px" }} >
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Mileage</h5>
          <select className="filter--select">
            <option value="option1">-</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>
      </div>

      <div className="center-page">
        <div className="center-page-top-one">
          <h2>Car market</h2>
          <div className="center-page-top-two">
            <p1>Sort by</p1>
            <select className="sort--select" style={{ marginRight: "26px", marginLeft: "14px" }}>
              <option value="option1">sort by</option>
              <option value="option2">Варіант 2</option>
              <option value="option3">Варіант 3</option>
            </select>
            <MenuIcon style={{ marginRight: "8" }} />
            <AppsIcon />
          </div>
        </div>
      </div>
      <div className="card--list--cars" >
        <div className="card--list--car">
          <img className="car-image" src="https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp" alt="car" />
          <div className="car-btn">
            <h3 className="car-name">NISSAN Qashqai 2018</h3>
            <button className="btn-used" >Used</button>
          </div>
          <div className="price-car">
            <p1 className="price-dollar" >12 200$ <span style={{ marginLeft: "15px", fontWeight: "500", fontSize: "16px" }}>446 124₴</span> </p1>
          </div>
          <div className="line--two"></div>
          <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <SpeedIcon />
                20 000 km.
              </label>
            </div>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <PlaceIcon />
                Lviv
              </label>
            </div>
            <div className="icon-car" style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <LocalGasStationIcon />
                Diesel 1.6
              </label>
            </div>
            <div style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <HandymanIcon />
                mechanical
              </label>
            </div>
          </div>
        </div>
        <div className="card--list--car">
          <img className="car-image" src="https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp" alt="car" />
          <div className="car-btn">
            <h3 className="car-name">NISSAN Qashqai 2018</h3>
            <button className="btn-used" >Used</button>
          </div>
          <div className="price-car">
            <p1 className="price-dollar" >12 200$ <span style={{ marginLeft: "15px", fontWeight: "500", fontSize: "16px" }}>446 124₴</span> </p1>
          </div>
          <div className="line--two"></div>
          <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <SpeedIcon />
                20 000 km.
              </label>
            </div>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <PlaceIcon />
                Lviv
              </label>
            </div>
            <div className="icon-car" style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <LocalGasStationIcon />
                Diesel 1.6
              </label>
            </div>
            <div style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <HandymanIcon />
                mechanical
              </label>
            </div>
          </div>
        </div>
        <div className="card--list--car">
          <img className="car-image" src="https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp" alt="car" />
          <div className="car-btn">
            <h3 className="car-name">NISSAN Qashqai 2018</h3>
            <button className="btn-used" >Used</button>
          </div>
          <div className="price-car">
            <p1 className="price-dollar" >12 200$ <span style={{ marginLeft: "15px", fontWeight: "500", fontSize: "16px" }}>446 124₴</span> </p1>
          </div>
          <div className="line--two"></div>
          <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <SpeedIcon />
                20 000 km.
              </label>
            </div>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <PlaceIcon />
                Lviv
              </label>
            </div>
            <div className="icon-car" style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <LocalGasStationIcon />
                Diesel 1.6
              </label>
            </div>
            <div style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <HandymanIcon />
                mechanical
              </label>
            </div>
          </div>
        </div>
        <div className="card--list--car">
          <img className="car-image" src="https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp" alt="car" />
          <div className="car-btn">
            <h3 className="car-name">NISSAN Qashqai 2018</h3>
            <button className="btn-used" >Used</button>
          </div>
          <div className="price-car">
            <p1 className="price-dollar" >12 200$ <span style={{ marginLeft: "15px", fontWeight: "500", fontSize: "16px" }}>446 124₴</span> </p1>
          </div>
          <div className="line--two"></div>
          <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <SpeedIcon />
                20 000 km.
              </label>
            </div>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <PlaceIcon />
                Lviv
              </label>
            </div>
            <div className="icon-car" style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <LocalGasStationIcon />
                Diesel 1.6
              </label>
            </div>
            <div style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <HandymanIcon />
                mechanical
              </label>
            </div>
          </div>
        </div>
        <div className="card--list--car">
          <img className="car-image" src="https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp" alt="car" />
          <div className="car-btn">
            <h3 className="car-name">NISSAN Qashqai 2018</h3>
            <button className="btn-used" >Used</button>
          </div>
          <div className="price-car">
            <p1 className="price-dollar" >12 200$ <span style={{ marginLeft: "15px", fontWeight: "500", fontSize: "16px" }}>446 124₴</span> </p1>
          </div>
          <div className="line--two"></div>
          <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <SpeedIcon />
                20 000 km.
              </label>
            </div>
            <div style={{ flex: "45%", marginBottom: "6px" }}>
              <label className="form-control--four icon-car">
                <PlaceIcon />
                Lviv
              </label>
            </div>
            <div className="icon-car" style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <LocalGasStationIcon />
                Diesel 1.6
              </label>
            </div>
            <div style={{ flex: "45%" }}>
              <label className="form-control--four icon-car">
                <HandymanIcon />
                mechanical
              </label>
            </div>
          </div>
        </div>
      </div>



      <div className="navbar" >
        <div>
          <input placeholder="     Search" className="searh-input" />
        </div>
        <div>
          <button className="sell--button" >Sell a car</button>
        </div>
        <div className="navbar--menu" >
          <div className="navbar--icon">
            <Link className="navbar--star" to="/favourites">
              <IconButton>
                <StarBorderIcon />
              </IconButton>
            </Link>
            <Link to="/messages">
              <IconButton>
                <MessageIcon />
              </IconButton>
            </Link>
            <Link to="/messages">
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </Link>
          </div>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CarsList;



/*

 <div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
      <Link to="/sell">
        <Button
          style={{
            backgroundColor: "#393E46",
            color: "#EEEEEE",
            fontSize: 20,
            margin: 10
          }}
        >
          Продати авто
        </Button>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: 560,
            width: 240,
            backgroundColor: "rgba(211, 211, 211, 0.1)",
            margin: 16,
          }}
        >
          <Typography variant="h5" style={{ color: "#393E46", fontWeight: "bold", marginLeft: 50 }}>
            Фільтр авто
          </Typography>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold", color: "#393E46" }}>Стан авто</label>
            <div>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Б/У"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Нові"
              />
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold", color: "#393E46" }}>Об'єм двигуна</label>
            <div style={{ display: "flex", gap: 10 }}>
              <TextField
                type="number"
                label="від"
                variant="outlined"
                size="small"
              />
              <TextField
                type="number"
                label="до"
                variant="outlined"
                size="small"
              />
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold", color: "#393E46" }}>Рік</label>
            <div style={{ display: "flex", gap: 10 }}>
              <TextField
                type="number"
                label="від"
                variant="outlined"
                size="small"
              />
              <TextField
                type="number"
                label="до"
                variant="outlined"
                size="small"
              />
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold", color: "#393E46" }}>Пробіг(тис. км)</label>
            <div style={{ display: "flex", gap: 10 }}>
              <TextField
                type="number"
                label="від"
                variant="outlined"
                size="small"
              />
              <TextField
                type="number"
                label="до"
                variant="outlined"
                size="small"
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <InputLabel style={{ fontWeight: "bold", color: "#393E46" }}>Марка</InputLabel>
            <Select variant="outlined" label="Марка">
              <MenuItem value="Mercedes">Mercedes</MenuItem>
              <MenuItem value="Audi">Audi</MenuItem>
              <MenuItem value="Skoda">Skoda</MenuItem>
              <MenuItem value="Volkswagen">Volkswagen</MenuItem>
            </Select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <InputLabel style={{ fontWeight: "bold", color: "#393E46" }}>Модель</InputLabel>
            <Select variant="outlined" label="Модель"></Select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <InputLabel style={{ fontWeight: "bold", color: "#393E46" }}>Область</InputLabel>
            <Select variant="outlined" label="Область">
              <MenuItem value="Львівська">Львівська</MenuItem>
              <MenuItem value="Київська">Київська</MenuItem>
              <MenuItem value="Луганська">Луганська</MenuItem>
              <MenuItem value="Житомирська">Житомирська</MenuItem>
              <MenuItem value="Запорізька">Запорізька</MenuItem>
            </Select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <label style={{ fontWeight: "bold", color: "#393E46" }}>Коробка передач</label>
            <div>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Ручна / Механіка"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Автомат"
              />
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <Button variant="contained" color="primary">
              Пошук
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {carData.map((car) => (
            <Card key={car.id} style={{ width: 760, margin: 16, display: "flex" }}>
              <img
                src={car.image}
                alt={car.name}
                style={{ width: 380, height: 250, objectFit: "cover" }}
              />
              <CardContent style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                <Typography gutterBottom variant="h6" component="div" fontWeight="bold" style={{ textOverflow: "ellipsis", color: "#393E46", whiteSpace: "nowrap" }}>
                  {car.name}
                </Typography>
                <Typography variant="h7" fontWeight="bold" color="#222831"  >
                  {car.price}$
                </Typography>
                <Grid container spacing={1} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <PlaceIcon />
                    <Typography variant="body2" color="text.secondary">
                      {car.location}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <HandymanIcon />
                    <Typography variant="body2" color="text.secondary">

                      {car.transmission}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <SpeedIcon />
                    <Typography variant="body2" color="text.secondary">
                      {car.distance}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <LocalGasStationIcon />
                    <Typography variant="body2" color="text.secondary">
                      {car.fuelType}
                    </Typography>
                  </Grid>
                </Grid>
                <CardActions>
                  <Link to="/about">
                    <Button variant="outlined" style={{ color: "#00ADB5" }}>
                      More
                    </Button>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
*/