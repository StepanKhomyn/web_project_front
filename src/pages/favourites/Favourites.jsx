import React, { useState } from 'react'
import "./Favourites.css"
import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Header from '../Header';
import Menu from '../cars-list/components/Menu';

const Favourites = () => {
  const navigate = useNavigate();
  const [savedCars, setSavedCars] = useState([
    {
      id: 1,
      name: 'Tesla Model 3 2018',
      price: '20 999 $',
      km: '97 тис. км',
      location: 'Пустомити',
      fuelType: 'Електро',
      transmission: 'Автомат',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '09.10.2023',
      seller: 'Андрій'
    },
    {
      id: 2,
      name: 'BMW i3 2019',
      price: '22 500 $',
      km: '85 тис. км',
      location: 'Київ',
      fuelType: 'Електро',
      transmission: 'Автомат',
      description: 'Another description here...',
      date: '11.11.2023',
      seller: 'Іван'
    },
  ]);
  const handleSingleDeletion = (carId) => {
    const updatedCars = savedCars.filter((car) => car.id !== carId);
    setSavedCars(updatedCars);
  };

  const handleClearAll = () => {
    setSavedCars([]);
  };

  return (
    <div style={{ marginLeft: "70px", marginRight: "70px" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <div className="favourite">
          <div className="container">
            <div className="container-header">
              <Breadcrumbs aria-label="breadcrumb">
                <Link onClick={() => navigate("/mycar")} style={{ color: "#00ADB5" }}>
                  <Button>
                    Список авто
                  </Button>
                </Link>
                <Typography color="text.primary">Обране 3</Typography>
              </Breadcrumbs>
              <div className="container-header-clear" onClick={handleClearAll}>
                <DeleteForeverIcon /> Очистити список
              </div>
            </div>
            <div className="container-main">
              {savedCars.map((car) => (
                  <div key={car.id} className="container-main-item">
                <img src={'https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp'} />
                <div className="container-main-item-info">
                  <h3>{car.name}</h3>
                  <div className="container-main-item-info-price">
                    {car.price}
                  </div>
                  <div className="container-main-item-info-short">
                    <div>
                      <SpeedIcon className="container-main-item-info-short-icon" /> {car.km}
                    </div>
                    <div>
                      <PlaceIcon className="container-main-item-info-short-icon" /> {car.location}
                    </div>
                  </div>
                  <div className="container-main-item-info-short">
                    <div>
                      <LocalGasStationIcon className="container-main-item-info-short-icon" /> {car.fuelType}
                    </div>
                    <div>
                      <HandymanIcon className="container-main-item-info-short-icon" /> {car.transmission}
                    </div>
                  </div>
                  <div className="container-main-item-info-description">
                    {car.description}
                  </div>
                  <div className="container-main-item-info-time">
                    <AccessTimeIcon className="container-main-item-info-time-icon" /> {car.date}
                  </div>
                </div>
                <div className="container-main-item-action">
                  <div className="container-main-item-action-about">
                    Продавець
                    <div className="container-main-item-action-about-name">
                      {car.seller}
                    </div>
                  </div>
                  <div className="container-main-item-action-send_mess">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      startIcon={<SendIcon />}
                      className="small-button" 
                    >
                      Надіслати повідомлення
                    </Button>
                  </div>

                  <div className="container-main-item-action-delete">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<DeleteIcon />}
                      className="small-button"
                      onClick={() => handleSingleDeletion(car.id)}
                    >
                      Вилучити з списку
                    </Button>
                  </div>
                </div>
              </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourites