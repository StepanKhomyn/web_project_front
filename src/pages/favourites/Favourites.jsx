import React, { useState, useEffect } from 'react'
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
  const [savedCars, setSavedCars] = useState([]);

  useEffect(() => {
    const storedCars = localStorage.getItem('favourites');
    if (storedCars) {
      setSavedCars(JSON.parse(storedCars));
    }
  }, []);

  const updateLocalStorage = (cars) => {
    localStorage.setItem('favourites', JSON.stringify(cars));
  };

  const handleSingleDeletion = (carId) => {
    const updatedCars = savedCars.filter((car) => car.id !== carId);
    setSavedCars(updatedCars);
    updateLocalStorage(updatedCars); // Оновлюємо localStorage після видалення
  };

  const handleClearAll = () => {
    setSavedCars([]);
    localStorage.removeItem('favourites'); // Видаляємо дані з localStorage при очищенні улюблених авто
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
                  <h3>{car.breand} {car.model}</h3>
                  <div className="container-main-item-info-price">
                    {car.price}$
                  </div>
                  <div className="container-main-item-info-short">
                    <div>
                      <SpeedIcon className="container-main-item-info-short-icon" /> {car.distance}
                    </div>
                    <div>
                      <PlaceIcon className="container-main-item-info-short-icon" /> {car.region}
                    </div>
                  </div>
                  <div className="container-main-item-info-short">
                    <div>
                      <LocalGasStationIcon className="container-main-item-info-short-icon" /> {car.fuel}
                    </div>
                    <div>
                      <HandymanIcon className="container-main-item-info-short-icon" /> {car.driveUnit}
                    </div>
                  </div>
                  <div className="container-main-item-info-description">
                    {car.description}
                  </div>
                  <div className="container-main-item-info-time">
                    <AccessTimeIcon className="container-main-item-info-time-icon" /> {car.year}
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