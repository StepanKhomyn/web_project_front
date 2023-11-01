import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import "../CarsList.css"
import { useState } from 'react';

const a = [
  { modelName: "q8", type: "Audi" },
  { modelName: "sivic", type: "Honda" }
]

const typeOfCar = [
  { typeCar: "Sedan" },
  { typeCar: "Minivan" },
  { typeCar: "SUV Pickup" },
  { typeCar: "Microvan" },
  { typeCar: "Сoupe" },
  { typeCar: "Crossover" },
  { typeCar: "Hatchback" },
  { typeCar: "Convertible" },
  { typeCar: "Sports car" },
  { typeCar: "Compact car" },
]

const b = a.filter(i => i.type === "Audi")

console.log(b)

const Filter = ({ setVehicleType, setBrandType, setExchange, setSelectedTypes, dataFromChild }) => {

  const [selectedTypes, setSelectedTypesLocal] = useState([]);
  const [showAllTypes, setShowAllTypes] = useState(false);
  

  const displayedTypes = showAllTypes ? typeOfCar : typeOfCar.slice(0, 4);

  const handleTypeOfCarChange = (typeCar) => {
    const updatedSelectedTypes = [...selectedTypes];
    const index = updatedSelectedTypes.indexOf(typeCar);

    if (index !== -1) {
      updatedSelectedTypes.splice(index, 1);
    } else {
      updatedSelectedTypes.push(typeCar);
    }

    setSelectedTypesLocal(updatedSelectedTypes);
    setSelectedTypes(updatedSelectedTypes);
  };

  return (
    <>
      <div className={`left--menu ${dataFromChild ? 'active' : ''}`}>
        <div className="fiteres--menu">
          <div>
            <h2 className="filteres" >Filters</h2>
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
            <input className="checkbox-exchange" type="checkbox" name="checkbox" onChange={(e) => setExchange(e.target.checked)} />
            Exchange
          </label>
        </div>
        <div className="line--one"></div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Type of vehicle</h5>
          <select className="filter--select" onChange={(e) => setVehicleType(e.target.value)}>
            <option value="option1">All types</option>
            <option value="Passenger">Passenger</option>
            <option value="Bus">Bus</option>
            <option value="Ship">Ship</option>
            <option value="Plane">Plane</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 style={{ margin: "18px 0px 8px 0px" }} className="filter--select--text">Car brand</h5>
          <select className="filter--select" onChange={(e) => setBrandType(e.target.value)}>
            <option value="option1">All brand</option>
            <option value="Mersedes-Benz">Mersedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Tesla">Tesla</option>
            <option value="Kia">Kia</option>
            <option value="Skoda">Skoda</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Car model</h5>
          <select className="filter--select">
            {b.map(i => {
              /*  return <option value="option1">{i.modelName}</option>*/
            })}
            <option value="option1">All model</option>
            <option value="option2">Варіант 2</option>
            <option value="option3">Варіант 3</option>
          </select>
        </div>

        <div className="line--one"></div>
        <h3 className="type--of--car">Type of car</h3>
        <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
          {displayedTypes.map(typer => (
            <div style={{ flex: "45%", marginBottom: "6px" }} key={typer.typeCar}>
              <label className="form-control--four">
                <input
                  className="checkbox-exchange"
                  type="checkbox"
                  name="checkbox"
                  onChange={() => handleTypeOfCarChange(typer.typeCar)}
                />
                {typer.typeCar}
              </label>
            </div>
          ))}
        </div>
        <h3 className="view--all--types" onClick={() => setShowAllTypes(!showAllTypes)}>
          {showAllTypes ? 'Show Less Types' : 'View All Types'}
        </h3>
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
    </>
  )
}

export default Filter