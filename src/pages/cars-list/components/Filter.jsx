import React, { useEffect } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import "../CarsList.css"
import { useState } from 'react';


const region = [
  { region: "Vinnytsia Oblast" },
  { region: "Volyn Oblast" },
  { region: "Dnipropetrovsk Oblast" },
  { region: "Donetsk Oblast" },
  { region: "Zhytomyr Oblast" },
  { region: "Zakarpattia Oblast" },
  { region: "Zaporizhzhia Oblast" },
  { region: "Ivano-Frankivsk Oblast" },
  { region: "Kyiv" },
  { region: "Kyiv Oblast" },
  { region: "Kirovohrad Oblast" },
  { region: "Luhansk Oblast" },
  { region: "Lviv Oblast" },
  { region: "Mykolaiv Oblast" },
  { region: "Odesa Oblast" },
  { region: "Poltava Oblast" },
  { region: "Rivne Oblast" },
  { region: "Sumy Oblast" },
  { region: "Ternopil Oblast" },
  { region: "Kharkiv Oblast" },
  { region: "Kherson Oblast" },
  { region: "Khmelnytskyi Oblast" },
  { region: "Cherkasy Oblast" },
  { region: "Chernivtsi Oblast" },
  { region: "Chernihiv Oblast" },
  { region: "Autonomous Republic of Crimea" },
  { region: "Sevastopol" },
]

const state = [
  { state: "New (Factory)" },
  { state: "Used (Second-hand)" },
  { state: "Restored" },
  { state: "Demonstration (Test Drive)" },
  { state: "Damaged (Accident)" },
  { state: "Faulty (Needs Repair)" },
  { state: "Electric (Fuel Type-based)" },
  { state: "Stored (Not in Use for a Long Time)" },
  { state: "Leased (Under Lease)" },
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

const fuel = [
  { fuel: "Gasoline" },
  { fuel: "Diesel Fuel" },
  { fuel: "Electricity" },
  { fuel: "Hybrid Systems" },
  { fuel: "Natural Gas" },
]

const driveUnit = [
  { driveUnit: "Manual" },
  { driveUnit: "Automatic" },
  { driveUnit: "AMT" },
  { driveUnit: "CVT" },
]

const modelsByBrand = {
  'Acura': ['ILX', 'TLX', 'MDX', 'RDX', 'NSX'],
  'Alfa Romeo': ['Giulia', 'Stelvio', '4C', '8C', 'Tonale', 'Brera', 'Spider', 'MiTo', '159'],
  'Aston Martin': ['DB11', 'Vantage', 'DBS Superleggera', 'Rapide', 'Valhalla', 'DBX', 'Virage', 'One-77', 'Lagonda'],
  'Audi': ['A3', 'A4', 'A6', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6', 'S7', 'A1', 'A5', 'A7', 'SQ5', 'SQ7', 'SQ8', 'e-tron', 'Q2', 'Q3', 'Q4', 'A2'],
  'Bentley': ['Continental GT', 'Bentayga', 'Flying Spur', 'Mulsanne', 'Azure', 'Arnage', 'Brooklands', 'Mark VI', 'Turbo R'],
  'BMW': ['3 Series', '5 Series', 'X3', 'X5', '7 Series', '1 Series', '2 Series', '4 Series', '6 Series', '8 Series', 'X1', 'X2', 'X4', 'X6', 'X7', 'Z4', 'i3', 'i4', 'iX3', 'iX5', 'iX7', 'M2', 'M3', 'M4', 'M5', 'M6', 'X5 M', 'X6 M'],
  'Buick': ['Enclave', 'Encore', 'Regal', 'Verano', 'Lacrosse', 'Park Avenue', 'Riviera', 'Skylark', 'Century'],
  'Cadillac': ['CTS', 'XT4', 'XT5', 'Escalade', 'CT6', 'ATS', 'XTS', 'SRX', 'XT6', 'Eldorado'],
  'Chevrolet': ['Malibu', 'Cruze', 'Equinox', 'Tahoe', 'Suburban', 'Impala', 'Camaro', 'Traverse', 'Colorado', 'Silverado', 'Volt', 'Bolt', 'Sonic', 'Spark', 'Express', 'Blazer', 'Trailblazer', 'Avalanche'],
  'Chrysler': ['300', 'Pacifica', 'Voyager', 'Aspen', 'Concorde', 'Sebring', 'Crossfire', 'PT Cruiser', '300M', 'LHS'],
  'Dodge': ['Charger', 'Challenger', 'Durango', 'Journey', 'Caravan', 'Grand Caravan', 'Caliber', 'Avenger', 'Dart', 'Nitro', 'Magnum', 'Viper'],
  'Ferrari': ['488 GTB', 'Portofino', 'F8 Tributo', 'SF90 Stradale', '812 Superfast', 'LaFerrari', 'Roma', 'Monza SP1', 'Monza SP2'],
  'Fiat': ['500', '500X', '500L', '124 Spider', 'Ducato', 'Panda', 'Punto', 'Tipo', 'Bravo', 'Cinquecento'],
  'Ford': ['Focus', 'Fusion', 'Escape', 'Explorer', 'Mustang', 'F-150', 'Edge', 'Ranger', 'EcoSport', 'Expedition', 'Bronco', 'Maverick', 'Taurus', 'Flex', 'Transit', 'Fiesta', 'C-Max', 'GT', 'Mondeo'],
  'Genesis': ['G70', 'G80', 'G90', 'GV70', 'GV80', 'G60', 'G70 Shooting Brake', 'GV70 Sport', 'GV80 Sport'],
  'GMC': ['Sierra', 'Terrain', 'Acadia', 'Canyon', 'Yukon', 'Envoy', 'Jimmy', 'Safari', 'Savana', 'Typhoon'],
  'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Fit', 'HR-V', 'Insight', 'Ridgeline', 'Passport', 'Clarity', 'S2000', 'Element', 'CR-Z', 'Integra', 'Crosstour', 'Civic Type R', 'Accord Hybrid', 'CR-V Hybrid', 'Insight Hybrid', 'Clarity Plug-In Hybrid', 'Prelude', 'NSX', 'Legend'],
  'Hyundai': ['Elantra', 'Tucson', 'Santa Fe', 'Palisade', 'Kona', 'Veloster', 'Ioniq', 'Genesis', 'Nexo', 'Azera', 'Equus', 'Santro', 'Grand i10', 'i20', 'i30', 'ix20', 'ix35', 'ix55', 'Getz', 'Sonata', 'Accent', 'Starex', 'Tiburon'],
  'Infiniti': ['Q50', 'Q60', 'QX50', 'QX80', 'QX60', 'Q30', 'QX30', 'Q70', 'QX70', 'QX60', 'FX35', 'FX50', 'EX35', 'JX35'],
  'Jaguar': ['XE', 'XF', 'F-PACE', 'I-PACE', 'E-PACE', 'XJ', 'S-Type', 'X-Type', 'XK', 'F-Type', 'C-Type', 'D-Type', 'XJR-15'],
  'Jeep': ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Renegade', 'Compass', 'Commander', 'Patriot', 'Liberty', 'Wagoneer', 'Gladiator', 'CJ-5', 'CJ-7'],
  'Kia': ['Rio', 'Sportage', 'Sorento', 'Telluride', 'Soul', 'Cadenza', 'Forte', 'K5', 'K900', 'Niro', 'Optima', 'Stinger', 'EV6', 'Stonic', 'Picanto', 'Mohave', 'ProCeed', 'Quoris', 'Soul EV', 'e-Niro', 'Niro Plug-in Hybrid', 'Optima Hybrid', 'Optima Plug-in Hybrid', 'Seltos', 'Carnival', 'Seltos', 'Telluride'],
  'Land Rover': ['Range Rover', 'Discovery', 'Defender', 'Evoque', 'Velar', 'Freelander', 'Range Rover Sport', 'Range Rover Evoque Convertible', 'Discovery Sport'],
  'Lexus': ['IS', 'ES', 'RX', 'GX', 'LX', 'NX', 'UX', 'LS', 'LC', 'RC', 'HS', 'CT', 'LFA'],
  'Lincoln': ['Navigator', 'Aviator', 'Nautilus', 'Corsair', 'Continental', 'MKZ', 'MKX', 'MKS', 'MKT', 'Mark LT'],
  'Maserati': ['Ghibli', 'Levante', 'Quattroporte', 'MC20', 'Grecale', 'GranTurismo', 'GranCabrio', 'Spyder', 'Bora'],
  'Mazda': ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5', 'RX-8', 'RX-7', 'MX-3', 'CX-30', 'MX-6'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'SLC', 'SL', 'CLS', 'CLA', 'SLK', 'SLS AMG', 'GT', 'Maybach', 'V-Class', 'B-Class', 'EQC', 'EQV', 'SLS AMG', 'R-Class'],
  'Mini': ['Cooper', 'Countryman', 'Clubman', 'Paceman', 'Convertible', 'Coupe', 'Roadster', 'SUV', 'Clubvan', 'John Cooper Works', 'GP', 'Electric', 'Cooper S', 'One'],
  'Nissan': ['Altima', 'Maxima', 'Rogue', 'Pathfinder', 'Armada', '370Z', 'GT-R', 'Murano', 'Kicks', 'Versa', 'Juke', 'Leaf', 'Titan', 'Frontier', 'Xterra', 'Quest', 'Cube'],
  'Porsche': ['911', 'Cayenne', 'Panamera', 'Macan', 'Taycan', 'Boxster', 'Cayman', '911 GT3', '918 Spyder', 'Carrera GT', 'Mission E', '718', 'Cayenne Coupe'],
  'Ram': ['1500', '2500', '3500', 'Promaster', 'Promaster City', 'Dakota', 'Ramcharger', 'Power Wagon', 'Laramie', 'Rebel'],
  'Skoda': ['Octavia', 'Superb', 'Kodiaq', 'Enyaq', 'Scala', 'Fabia', 'Kamiq', 'Karoq', 'Citigo', 'Roomster', 'Rapid', 'Yeti', 'Favorit', 'Felicia', 'Superb iV', 'Scala Monte Carlo', 'Octavia RS', 'Kodiaq RS', 'Octavia Scout', 'Kodiaq Scout', 'Kamiq Monte Carlo', 'Superb Combi', 'Citigo-e iV', 'Fabia Combi', 'Fabia Monte Carlo'],
  'Smart': ['ForTwo', 'ForFour', 'EQ ForTwo', 'EQ ForFour', 'Crossblade', 'Roadster', 'Forstars', 'Forjeremy', 'Forease', 'Forvision'],
  'Subaru': ['Impreza', 'Outback', 'Forester', 'Crosstrek', 'Ascent', 'BRZ', 'Legacy', 'WRX', 'XV', 'Levorg'],
  'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck', 'Roadster', 'Semi', 'Powerwall', 'Powerpack', 'Solar Roof', 'Model 2', 'Model 4', 'Model 6', 'Model 8', 'Model 10', 'Model U', 'Model R', 'Model V', 'Model W', 'Model Z'],
  'Toyota': ['Camry', 'Corolla', 'Rav4', 'Highlander', 'Prius', 'Land Cruiser', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'C-HR', 'Avalon', 'Yaris', 'Venza', '4Runner', 'Supra', 'Mirai', 'GR86', 'Prius Prime', 'Prius c', 'Prius v', 'Highlander Hybrid', 'Avalon Hybrid', 'CHR Hybrid', 'RAV4 Hybrid', 'Prius Plug-In Hybrid', 'Mirai', 'Camry Hybrid'],
  'Volkswagen': ['Golf', 'Passat', 'Tiguan', 'Atlas', 'Arteon', 'Polo', 'Up!', 'Jetta', 'Touareg', 'Beetle', 'ID.3', 'ID.4', 'ID. Buzz', 'Scirocco', 'T-Roc', 'Golf R', 'Golf GTI', 'Passat CC', 'e-Golf', 'Tiguan Allspace', 'T-Roc Cabriolet', 'Golf Variant', 'ID. Vizzion'],
  'Volvo': ['S60', 'S90', 'XC40', 'XC90', 'V60', 'V40', 'V90', 'XC60', 'XC70', 'C30', 'C70', 'Polestar 1', 'Polestar 2', 'S60 Cross Country', 'V60 Cross Country', 'XC40 Recharge', 'XC60 Recharge', 'XC90 Recharge']
};

const brand = [
  { brand: "Acura" },
  { brand: "Alfa Romeo" },
  { brand: "Aston Martin" },
  { brand: "Aston Martin" },
  { brand: "Audi" },
  { brand: "Bentley" },
  { brand: "BMW" },
  { brand: "Buick" },
  { brand: "Cadillac" },
  { brand: "Chevrolet" },
  { brand: "Chrysler" },
  { brand: "Dodge" },
  { brand: "Ferrari" },
  { brand: "Fiat" },
  { brand: "Ford" },
  { brand: "Genesis" },
  { brand: "GMC" },
  { brand: "Honda" },
  { brand: "Hyundai" },
  { brand: "Infiniti" },
  { brand: "Jaguar" },
  { brand: "Jeep" },
  { brand: "Kia" },
  { brand: "Land Rover" },
  { brand: "Lexus" },
  { brand: "Lincoln" },
  { brand: "Maserati" },
  { brand: "Mazda" },
  { brand: "Mercedes-Benz" },
  { brand: "Mini" },
  { brand: "Nissan" },
  { brand: "Porsche" },
  { brand: "Ram" },
  { brand: "Skoda" },
  { brand: "Smart" },
  { brand: "Subaru" },
  { brand: "Tesla" },
  { brand: "Toyota" },
  { brand: "Volkswagen" },
  { brand: "Volvo" },
]

const color = [
  { color: "Black" },
  { color: "Blue" },
  { color: "Beige" },
  { color: "Brown" },
  { color: "Gold" },
  { color: "Green" },
  { color: "Grey" },
  { color: "Metallic" },
  { color: "Orange" },
  { color: "Red" },
  { color: "Silver" },
  { color: "White" },
  { color: "Yellow" },
];


const Filter = ({setColor, colorType, setEngineFrom, engineFrom, setEngineTo, engineTo, setMileage, modelsType, selectedTypess, driveUnitType, fuelType, stateType, regionType, brandType, vehicleType, yearTo, yearFrom, mileage, priceTo, priceFrom, exchange, setDriveUnit, setFuel, setState, setRegion, setVehicleType, setBrandType, setModelsType, setExchange, setSelectedTypes, setPriceFrom, setPriceTo, setYearFrom, setYearTo, dataFromChild }) => {

  const [selectedTypes, setSelectedTypesLocal] = useState(selectedTypess);
  const localStorageBool = localStorage.getItem('showAllTypess') === "true" ? true : false
  const [showAllTypes, setShowAllTypes] = useState(localStorageBool);

  const models = modelsByBrand[brandType] || []

  useEffect(() => {
    window.localStorage.setItem('showAllTypess', showAllTypes);
  }, [showAllTypes]);

  const handleBrandTypeChange = (brand) => {
    // Оновлюємо вибрану марку
    setBrandType(brand);

    // Якщо обрано "All brand", оновлюємо і вибрану модель на "All model"
    if (brand === "option1") {
      setModelsType("option1");
    }
  }

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
      {console.log(dataFromChild)}
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
            <input className="checkbox-exchange" type="checkbox" name="checkbox" onChange={(e) => setExchange(e.target.checked)} checked={exchange} />
            Exchange
          </label>
        </div>
        <div className="line--one"></div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Type of vehicle</h5>
          <select className="filter--select" onChange={(e) => setVehicleType(e.target.value)} value={vehicleType} >
            <option value="option1">All types</option>
            <option value="Passenger">Passenger</option>
            <option value="Bus">Bus</option>
            <option value="Ship">Ship</option>
            <option value="Plane">Plane</option>
          </select>
        </div>
        <div className="filter--select-all">
          <h5 style={{ margin: "18px 0px 8px 0px" }} className="filter--select--text">Car brand</h5>
          <select className="filter--select" onChange={(e) => handleBrandTypeChange(e.target.value)} value={brandType}>
            <option value="option1">All brand</option>
            {brand.map((brandName, index) => (
              <option key={index} >{brandName.brand}</option>
            ))}
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Car model</h5>
          <select className="filter--select" onChange={(e) => setModelsType(e.target.value)} value={modelsType}>
            <option value="option1">All model</option>
            {models.map((modelName, index) => (
              <option key={index} value={modelName}>{modelName}</option>
            ))}
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
                  checked={selectedTypes.includes(typer.typeCar)}
                />
                {typer.typeCar}
              </label>
            </div>
          ))}
        </div>
        <h3 className="view--all--types" onClick={() => setShowAllTypes(prevState => !prevState)}>
          {showAllTypes ? 'Show Less Types' : 'View All Types'}
        </h3>
        <div className="line--one"></div>
        <div className="price-filter">
          <div>
            <h5 className="price--from--text">Price from</h5>
            <input placeholder="Price from" className="price--from--input" onChange={(e) => setPriceFrom(e.target.value)} value={priceFrom} />
          </div>
          <div >
            <h5 className="price--from--text">Price to</h5>
            <input placeholder="Price to" className="price--from--input" onChange={(e) => setPriceTo(e.target.value)} value={priceTo} />
          </div>
        </div>
        <div className="line--one"></div>
        <div className="price-filter">
          <div>
            <h5 className="price--from--text">Year from</h5>
            <input placeholder="Year from" className="price--from--input" onChange={(e) => setYearFrom(e.target.value)} value={yearFrom} />
          </div>
          <div >
            <h5 className="price--from--text">Year to</h5>
            <input placeholder="Year to" className="price--from--input" onChange={(e) => setYearTo(e.target.value)} value={yearTo} />
          </div>
        </div>
        <div className="line--one"></div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Region</h5>
          <select className="filter--select" onChange={(e) => setRegion(e.target.value)} value={regionType}>
            <option value="option1">All region</option>
            {region.map(region => {
              return <option value={region.region}>{region.region}</option>
            })}
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>State</h5>
          <select className="filter--select" onChange={(e) => setState(e.target.value)} value={stateType}>
            <option value="option1">All state</option>
            {state.map(state => {
              return <option value={state.state}>{state.state}</option>
            })}
          </select>
        </div>
        <div className="line--one"></div>
        <h3 className="type--of--car">Additional filters</h3>
        <div className="additional--filter-two">
          <div className="">
            <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Engine from</h5>
            <input placeholder="Engine from" className="price--from--input" onChange={(e) => setEngineFrom(e.target.value)} value={engineFrom} />
          </div>
          <div className="">
            <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Engine  to</h5>
            <input placeholder="Engine to" className="price--from--input" onChange={(e) => setEngineTo(e.target.value)} value={engineTo} />
          </div>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Fuel</h5>
          <select className="filter--select" onChange={(e) => setFuel(e.target.value)} value={fuelType}>
            <option value="option1">-</option>
            {fuel.map(fuel => {
              return <option value={fuel.fuel}>{fuel.fuel}</option>
            })}
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Color</h5>
          <select className="filter--select" onChange={(e) => setColor(e.target.value)} value={colorType}>
            <option value="option1">-</option>
            {color.map(color => {
              return <option value={color.color}>{color.color}</option>
            })}
          </select>
        </div>
        <div className="filter--select-all">
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Drive unit</h5>
          <select className="filter--select" onChange={(e) => setDriveUnit(e.target.value)} value={driveUnitType}>
            <option value="option1">-</option>
            {driveUnit.map(driveUnit => {
              return <option value={driveUnit.driveUnit}>{driveUnit.driveUnit}</option>
            })}
          </select>
        </div>
        <div className="filter--select-all" style={{ marginBottom: "40px" }} >
          <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Mileage</h5>
          <input placeholder="Mileage" className="price--from--input" style={{width: '82%'}} onChange={(e) => setMileage(e.target.value)} value={mileage} />
        </div>
      </div>
    </>
  )
}

export default Filter