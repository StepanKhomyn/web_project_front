import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Link } from "react-router-dom";
import "../CarsList.css"

const List = () => {
  return (
    <>
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
        <div className="card--list--cars" >

          <div className="card--list--car">
            <Link style={{ textDecoration: "none" }} to={"/about"}>
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
            </Link>
          </div>


          <div className="card--list--car">
            <Link style={{ textDecoration: "none" }} to={"/about"}>
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
            </Link>
          </div>
          <div className="card--list--car">
            <Link style={{ textDecoration: "none" }} to={"/about"}>
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
            </Link>
          </div>


        </div>
      </div>

    </>
  )
}

export default List