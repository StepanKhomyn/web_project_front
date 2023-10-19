import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Link } from "react-router-dom";
import "../CarsList.css"


const List = ({ sortedData, setSortingOption }) => {

  return (
    <>
      <div className="center-page">
        <div className="center-page-top-one">
          <h2>Car market</h2>
          <div>
          </div>
          <div className="center-page-top-two">
            <p1>Sort by</p1>
            <select
              className="sort--select"
              style={{ marginRight: '26px', marginLeft: '14px' }}
              onChange={(e) => setSortingOption(e.target.value)}
            >
              <option value="option1">sort by</option>
              <option value="option2">За назвою</option>
              <option value="option3">За ціною</option>
            </select>
            <MenuIcon style={{ marginRight: '8' }} />
            <AppsIcon />
          </div>
        </div>
        <div className="card--list--cars">
        {sortedData.length > 0 ? (
          sortedData.map((car) => (
            <div className="card--list--car" key={car.id}>
              {console.log('Рендеринг авто:', car.type)}
              <Link style={{ textDecoration: 'none' }} to={`/about/${car.id}`}>
                <img
                  className="car-image"
                  src="https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp"
                  alt="car"
                />
                <div className="car-btn">
                  <h3 className="car-name">{car.breand}</h3>
                  <button className="btn-used">Used</button>
                </div>
                <div className="price-car">
                  <p1 className="price-dollar">{`${car.price} $`} <span style={{ marginLeft: '15px', fontWeight: '500', fontSize: '16px' }}>446 124₴</span></p1>
                </div>
                <div className="line--two"></div>
                <div className="four--change" style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ flex: "45%", marginBottom: "6px" }}>
                    <label className="form-control--four icon-car">
                      <SpeedIcon />
                      {car.distance}
                    </label>
                  </div>
                  <div style={{ flex: "45%", marginBottom: "6px" }}>
                    <label className="form-control--four icon-car">
                      <PlaceIcon />
                      {car.location}
                    </label>
                  </div>
                  <div className="icon-car" style={{ flex: "45%" }}>
                    <label className="form-control--four icon-car">
                      <LocalGasStationIcon />
                      {car.fuelType}
                    </label>
                  </div>
                  <div style={{ flex: "45%" }}>
                    <label className="form-control--four icon-car">
                      <HandymanIcon />
                      {car.transmission}
                    </label>
                  </div>
                </div>

              </Link>
            </div>
            ))
            ) : (
              <p style={{ fontSize: '24px', textAlign: 'center', marginTop: '20px' , marginLeft: "330px" }}>Немає автомобілів</p>
            )}
        </div>
      </div>
    </>
  );
};

export default List;