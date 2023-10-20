import React from 'react'
import "/workspaces/web_project_front/src/pages/about/AboutCar.css"

const RightMenu = ({carData}) => {
  return (
    <div className="left--menu">
      <div className="fiteres--menu">
        <div>
          <h2 className='title'>About Car</h2>
        </div>
      </div>
      <div className="exchange--menu">
        <label class="exchange">
          <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled />
          Exchange
        </label>
      </div>
      <div className="line--one"></div>
      <div className="filter--select-all">
        <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Type of vehicle</h5>
        <span>Passenger</span>
      </div>
      <div className="filter--select-all">
        <h5 style={{ margin: "18px 0px 8px 0px" }} className="filter--select--text">Car brand</h5>
        <span>{carData.name}</span>
      </div>
      <div className="filter--select-all">
        <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Car model</h5>
        <span>Camry</span>
      </div>
      <div className="filter--select-all">
        <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Year</h5>
        <span>2023</span>
      </div>
      <div className="filter--select-all">
        <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Color</h5>
        <span>Black</span>
      </div>
      <div className="line--one"></div>
      <h3 className="type--of--car">Type of car</h3>
      <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "45%", marginBottom: "6px" }}>
          <label className="form-control--four">
            <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled />
            Sedan
          </label>
        </div>
        <div style={{ flex: "45%", marginBottom: "6px" }}>
          <label className="form-control--four">
            <input className="checkbox-checked" type="checkbox" name="checkbox" checked disabled />
            Minivan
          </label>
        </div>
        <div style={{ flex: "45%" }}>
          <label className="form-control--four">
            <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled />
            SUV pickup
          </label>
        </div>
        <div style={{ flex: "45%" }}>
          <label className="form-control--four">
            <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled />
            Microvan
          </label>
        </div>
      </div>
      <h3 className="view--all--types">View all types</h3>
      <div className="line--one"></div>
      <div className="filter--select-all">
        <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Region</h5>
        <span>Lviv</span>
      </div>
      <div className="filter--select-all">
        <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>State</h5>
        <span>Sokilnyky</span>
      </div>
    </div>
  )
}

export default RightMenu