import React from 'react'
import "../AboutCar.css"
const RightMenu = ({ carData }) => {
  return (
    <div className="right-menu" style={{ position: "sticky", top: "0px" }}>
      <div className="about-car-menu">
        <div>
          <h2 className='title'>About Car</h2>
        </div>
      </div>
      <div className="exchange--menu">
        <label class="exchange">
          <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled />
          <span className='margin-for-svg'>Exchange</span>
        </label>
      </div>
      <div className="exchange--menu">
        <label class="exchange">
          <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled checked />
          <span className='margin-for-svg'>Used</span>
        </label>
      </div>
      <div className="exchange--menu">
        <label class="exchange">
          <input className="checkbox-exchange" type="checkbox" name="checkbox" disabled checked />
          <span className='margin-for-svg'>ДТП</span>
        </label>
      </div>
      <div className="line--one"></div>
      <div className="margin-for-svg">
        <h3 className="right-menu-font">
        <span class="point" className='span-point price-ua'>•</span>
          Type of vehicle</h3>
        <span className='margin-for-span-right-menu'>Passenger</span>
      </div>
      <div className="left-marg">
        <h3 className="right-menu-font">
        <span class="point" className='span-point price-ua'>•</span>
          Car brand</h3>
        <span className='margin-for-span-right-menu'>{carData.name}</span>
      </div>
      <div className="left-marg">
        <h5 className="right-menu-font">
        <span class="point" className='span-point price-ua'>•</span>
          Car model</h5>
        <span className='margin-for-span-right-menu'>Camry</span>
      </div>
      <div className="left-marg">
        <h5 className="right-menu-font">
        <span class="point" className='span-point price-ua'>•</span>
          Year</h5>
        <span className='margin-for-span-right-menu'>2023</span>
      </div>
      <div className="left-marg">
        <h5 className="right-menu-font">
        <span class="point" className='span-point price-ua'>•</span>
          Color</h5>
        <span className='margin-for-span-right-menu'>Black</span>
      </div>
      <div className="left-marg">
        <h5 className="right-menu-font">
        <span class="point" className='span-point price-ua'>•</span>
          Type of car</h5>
        <span className='margin-for-span-right-menu'>Minivan</span>
      </div>
      {/* <h3 className="type--of--car">Type of car</h3>
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
      <div className="line--one"></div> */}
      <div className="left-marg">
        <h5 className="right-menu-font">
          <span class="point" className='span-point price-ua'>•</span>
          Region
        </h5>
        <span className='margin-for-span-right-menu'>Lviv</span>
      </div>
      <div className="left-marg">
        <h5 className="right-menu-font">
          <span class="point" className='span-point price-ua'>•</span>
          State
        </h5>
        <span className='margin-for-span-right-menu'>Sokilnyky</span>
      </div>
    </div>
  )
}

export default RightMenu