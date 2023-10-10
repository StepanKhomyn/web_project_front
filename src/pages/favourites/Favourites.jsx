import React from 'react'
import "./Favourites.css"
import {Breadcrumbs, Button, Link, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Favourites = () => {
  const navigate = useNavigate();

  return (
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
          <div className="container-header-clear">
           <DeleteForeverIcon/> Очистити список
          </div>
        </div>
        <div className="container-main">
          <div className="container-main-item">
            <img src={'https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp'}/>
            <div className="container-main-item-info">
              <h3>Tesla Model 3 2018</h3>
              <div className="container-main-item-info-price">
                  20 999 $
              </div>
              <div className="container-main-item-info-short">
                <div>
                   <SpeedIcon className="container-main-item-info-short-icon"/> 97 тис. км
                </div>
                <div>
                  <PlaceIcon className="container-main-item-info-short-icon"/> Пустомити
                </div>
              </div>
              <div className="container-main-item-info-short">
                <div>
                 <LocalGasStationIcon className="container-main-item-info-short-icon"/> Електро
                </div>
                <div>
                  <HandymanIcon className="container-main-item-info-short-icon"/> Автомат
                </div>
              </div>
              <div className="container-main-item-info-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto consectetur cum deleniti dignissimos dolorum illo iure, numquam odit perspiciatis, sequi tempora tempore temporibus ullam vero voluptatem. Deleniti, quis.
              </div>
              <div className="container-main-item-info-time">
                <AccessTimeIcon className="container-main-item-info-time-icon"/>  09.10.2023
              </div>
              </div>
            <div className="container-main-item-action">
              <div className="container-main-item-action-about">
                  Продавець
                <div className="container-main-item-action-about-name">
                  Андрій
                </div>
              </div>
              <div className="container-main-item-action-send_mess">
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<SendIcon />}
                    className="small-button" // Add the custom class
                >
                  Надіслати повідомлення
                </Button>
              </div>

              <div className="container-main-item-action-delete">
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                    className="small-button" // Add the custom class
                >
                  Вилучити з списку
                </Button>
              </div>
            </div>
            </div>
          <div className="container-main-item">
            <img src={'https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp'}/>
            <div className="container-main-item-info">
              <h3>Tesla Model 3 2018</h3>
              <div className="container-main-item-info-price">
                20 999 $
              </div>
              <div className="container-main-item-info-short">
                <div>
                  <SpeedIcon className="container-main-item-info-short-icon"/> 97 тис. км
                </div>
                <div>
                  <PlaceIcon className="container-main-item-info-short-icon"/> Пустомити
                </div>
              </div>
              <div className="container-main-item-info-short">
                <div>
                  <LocalGasStationIcon className="container-main-item-info-short-icon"/> Електро
                </div>
                <div>
                  <HandymanIcon className="container-main-item-info-short-icon"/> Автомат
                </div>
              </div>
              <div className="container-main-item-info-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto consectetur cum deleniti dignissimos dolorum illo iure, numquam odit perspiciatis, sequi tempora tempore temporibus ullam vero voluptatem. Deleniti, quis.
              </div>
              <div className="container-main-item-info-time">
                <AccessTimeIcon className="container-main-item-info-time-icon"/>  09.10.2023
              </div>
            </div>
            <div className="container-main-item-action">
              <div className="container-main-item-action-about">
                Продавець
                <div className="container-main-item-action-about-name">
                  Андрій
                </div>
              </div>
              <div className="container-main-item-action-send_mess">
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<SendIcon />}
                    className="small-button" // Add the custom class
                >
                  Надіслати повідомлення
                </Button>
              </div>

              <div className="container-main-item-action-delete">
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                    className="small-button" // Add the custom class
                >
                  Вилучити з списку
                </Button>
              </div>
            </div>
          </div>
          <div className="container-main-item">
            <img src={'https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp'}/>
            <div className="container-main-item-info">
              <h3>Tesla Model 3 2018</h3>
              <div className="container-main-item-info-price">
                20 999 $
              </div>
              <div className="container-main-item-info-short">
                <div>
                  <SpeedIcon className="container-main-item-info-short-icon"/> 97 тис. км
                </div>
                <div>
                  <PlaceIcon className="container-main-item-info-short-icon"/> Пустомити
                </div>
              </div>
              <div className="container-main-item-info-short">
                <div>
                  <LocalGasStationIcon className="container-main-item-info-short-icon"/> Електро
                </div>
                <div>
                  <HandymanIcon className="container-main-item-info-short-icon"/> Автомат
                </div>
              </div>
              <div className="container-main-item-info-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto consectetur cum deleniti dignissimos dolorum illo iure, numquam odit perspiciatis, sequi tempora tempore temporibus ullam vero voluptatem. Deleniti, quis.
              </div>
              <div className="container-main-item-info-time">
                <AccessTimeIcon className="container-main-item-info-time-icon"/>  09.10.2023
              </div>
            </div>
            <div className="container-main-item-action">
              <div className="container-main-item-action-about">
                Продавець
                <div className="container-main-item-action-about-name">
                  Андрій
                </div>
              </div>
              <div className="container-main-item-action-send_mess">
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<SendIcon />}
                    className="small-button" // Add the custom class
                >
                  Надіслати повідомлення
                </Button>
              </div>

              <div className="container-main-item-action-delete">
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                    className="small-button" // Add the custom class
                >
                  Вилучити з списку
                </Button>
              </div>
            </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Favourites