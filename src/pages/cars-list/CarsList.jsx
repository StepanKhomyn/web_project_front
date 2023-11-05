import React, { useEffect, useState } from "react";
import "./CarsList.css"
import Header from "../Header";
import Menu from "./components/Menu";
import Filter from "./components/Filter";
import List from "./components/List";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const apiKey = '81106b36bdb74941883a5389d7b0af62';
/*
 async function getExchangeRate() {
   try {
     const response = await fetch(`https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`);
     const data = await response.json();
     return data.rates.UAH;
   } catch (error) {
     console.error('Помилка при отриманні курсу обміну:', error);
     return null;
   }
 }
 
 async function convertDollarsToUAH(dollars) {
   const exchangeRate = await getExchangeRate();
   if (exchangeRate !== null) {
     const uah = dollars * exchangeRate;
     return uah.toFixed(0); // Округлюємо до двох знаків після коми
   } else {
     return null;
   }
 }
*/
const carData = [
  {
    id: 1,
    type: "Passenger",
    price: 10000,
    sity: "Ternopil",
    driveUnit: "AMT",
    distance: "11 000",
    breand: "Mercedes-Benz",
    exchange: true,
    image:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
    model: "A-Class",
    typeOfCar: "Sedan",
    year: 2008,
    region: "Ternopil Oblast",
    state: "New (Factory)",
    fuel: "Diesel Fuel",
    mileage: 50000,
    engine: 2.2,
    color: "Blue",
  },
  {
    id: 2,
    type: "Passenger",
    price: 4000,
    sity: "Kyiv",
    driveUnit: "Automatic",
    distance: "11 000",
    breand: "Kia",
    exchange: true,
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
    model: "Rio",
    typeOfCar: "Minivan",
    year: 2023,
    region: "Kyiv Oblast",
    state: "Restored",
    fuel: "Gasoline",
    mileage: 100000,
    engine: 3.2,
    color: "Red",
  },
  {
    id: 3,
    type: "Passenger",
    price: 1000,
    sity: "Lviv",
    driveUnit: "AMT",
    distance: "11 000",
    breand: "Audi",
    exchange: true,
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "A3",
    typeOfCar: "Sedan",
    year: 1990,
    region: "Lviv Oblast",
    state: "Restored",
    fuel: "Diesel Fuel",
    mileage: 700000,
    engine: 4.2,
    color: "Black",
  },
  {
    id: 4,
    type: "Ship",
    price: 6700,
    sity: "Ternopil",
    driveUnit: "Automatic",
    distance: "11 000",
    breand: "Skoda",
    exchange: false,
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "Octavia",
    typeOfCar: "Crossover",
    year: 1998,
    region: "Ternopil Oblast",
    state: "New (Factory)",
    fuel: "Diesel Fuel",
    mileage: 900000,
    engine: 3.0,
    color: "Metallic",
  },
  {
    id: 5,
    type: "Plane",
    price: 7000,
    sity: "Lviv",
    driveUnit: "Automatic",
    distance: "11 000",
    breand: "Tesla",
    exchange: true,
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
    model: "Model 3",
    typeOfCar: "Сoupe",
    year: 1998,
    region: "Lviv Oblast",
    state: "Restored",
    fuel: "Diesel Fuel",
    mileage: 100000,
    engine: 0.9,
    color: "Metallic",
  },
  {
    id: 6,
    type: "Plane",
    price: 5000,
    sity: "Ternopil",
    driveUnit: "Manual",
    distance: "11 000",
    breand: "Tesla",
    exchange: false,
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "Model 3",
    typeOfCar: "Convertible",
    year: 2000,
    region: "Ternopil Oblast",
    state: "Leased (Under Lease)",
    fuel: "Natural Gas",
    mileage: 250000,
    engine: 1.2,
    color: "Yellow",
  },
  {
    id: 7,
    type: "Plane",
    price: 5000,
    sity: "Lviv",
    driveUnit: "Manual",
    distance: "11 000",
    breand: "Tesla",
    exchange: false,
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "Model 3",
    typeOfCar: "Sports car",
    year: 2005,
    region: "Lviv Oblast",
    state: "New (Factory)",
    fuel: "Natural Gas",
    mileage: 150000,
    engine: 1.2,
    color: "Black",
  },
  {
    id: 8,
    type: "Plane",
    price: 5000,
    sity: "Ternopil",
    driveUnit: "Manual",
    distance: "11 000",
    breand: "Tesla",
    exchange: false,
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "Model S",
    typeOfCar: "Microvan",
    year: 2020,
    region: "Ternopil Oblast",
    state: "Leased (Under Lease)",
    fuel: "Gasoline",
    mileage: 100000,
    engine: 1.8,
    color: "Black",
  },

];







const CarsList = () => {
  const storedSelectedTypes = localStorage.getItem('selectedTypes');
  const initialSelectedTypes = storedSelectedTypes ? JSON.parse(storedSelectedTypes) : [];
  const localStorageBool = localStorage.getItem('exchange') === "true" ? true : false
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const [sortingOption, setSortingOption] = useState(localStorage.getItem('sortingOption') || '');
  const [vehicleType, setVehicleType] = useState(localStorage.getItem('vehicleType') || '');
  const [brandType, setBrandType] = useState(localStorage.getItem('brandType') || '');
  const [modelsType, setModelsType] = useState(localStorage.getItem('modelsType') || '');
  const [exchange, setExchange] = useState(localStorageBool);
  const [selectedTypes, setSelectedTypes] = useState(initialSelectedTypes);
  const [priceFrom, setPriceFrom] = useState(localStorage.getItem('priceFrom') || 0);
  const [priceTo, setPriceTo] = useState(localStorage.getItem('priceTo') || '');
  const [yearFrom, setYearFrom] = useState(localStorage.getItem('yearFrom') || 1900);
  const [yearTo, setYearTo] = useState(localStorage.getItem('yearTo') || '');
  const [region, setRegion] = useState(localStorage.getItem('region') || '');
  const [state, setState] = useState(localStorage.getItem('state') || '');
  const [fuel, setFuel] = useState(localStorage.getItem('fuel') || '');
  const [driveUnit, setDriveUnit] = useState(localStorage.getItem('driveUnit') || '');
  const [mileage, setMileage] = useState(localStorage.getItem('mileage') || '');
  const [engineFrom, setEngineFrom] = useState(localStorage.getItem('engineFrom') || 0.5);
  const [engineTo, setEngineTo] = useState(localStorage.getItem('engineTo') || '');
  const [color, setColor] = useState(localStorage.getItem('color') || '');

  /*  let filteredData = .filter(i => i.type === "Audi")*/

  useEffect(() => {
    window.localStorage.setItem('exchange', exchange);
    window.localStorage.setItem('priceFrom', priceFrom);
    window.localStorage.setItem('priceTo', priceTo);
    window.localStorage.setItem('yearFrom', yearFrom);
    window.localStorage.setItem('yearTo', yearTo);
    window.localStorage.setItem('vehicleType', vehicleType);
    window.localStorage.setItem('brandType', brandType);
    window.localStorage.setItem('region', region);
    window.localStorage.setItem('state', state);
    window.localStorage.setItem('fuel', fuel);
    window.localStorage.setItem('driveUnit', driveUnit);
    window.localStorage.setItem('selectedTypes', JSON.stringify(selectedTypes));
    window.localStorage.setItem('sortingOption', sortingOption);
    window.localStorage.setItem('searchTerm', searchTerm);
    window.localStorage.setItem('modelsType', modelsType);
    window.localStorage.setItem('mileage', mileage);
    window.localStorage.setItem('engineFrom', engineFrom);
    window.localStorage.setItem('engineTo', engineTo);
    window.localStorage.setItem('color', color);
  }, [exchange, priceFrom, priceTo, yearFrom, yearTo, vehicleType, brandType, region, state, fuel, driveUnit, selectedTypes, sortingOption, searchTerm, modelsType, mileage, engineFrom, engineTo, color]);

  const filteredData = carData.filter((car) =>
    car.breand.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (exchange === false || car.exchange === (exchange === true)) &&
    (priceFrom === '' || car.price >= parseFloat(priceFrom)) &&
    (priceTo === '' || car.price <= parseFloat(priceTo)) &&
    (yearFrom === '' || car.year >= parseInt(yearFrom)) &&
    (yearTo === '' || car.year <= parseInt(yearTo)) &&
    (mileage === '' || car.mileage <= parseInt(mileage)) &&
    (engineFrom === '' || car.engine >= parseFloat(engineFrom)) &&
    (engineTo === '' || car.engine <= parseFloat(engineTo))
  );

  const sortData = () => {
    let sortedArray = [...filteredData];

    if (sortingOption === 'option2') {
      sortedArray = sortedArray.sort((a, b) => a.breand.localeCompare(b.breand));
    } else if (sortingOption === 'option3') {
      sortedArray = sortedArray.sort((a, b) => a.price - b.price);
    }

    if (vehicleType && vehicleType !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.type.toLowerCase().includes(vehicleType.toLowerCase())
      );
    }

    if (region && region !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (state && state !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.state.toLowerCase().includes(state.toLowerCase())
      );
    }

    if (fuel && fuel !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.fuel.toLowerCase().includes(fuel.toLowerCase())
      );
    }

    if (driveUnit && driveUnit !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.driveUnit.toLowerCase().includes(driveUnit.toLowerCase())
      );
    }

    if (brandType && brandType !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.breand.toLowerCase().includes(brandType.toLowerCase())
      );
    }

    if (modelsType && modelsType !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.model.toLowerCase().includes(modelsType.toLowerCase())
      );
    }

    if (color && color !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.color.toLowerCase().includes(color.toLowerCase())
      );
    }
    return sortedArray;
  };

  const sortedData = sortData();
  const localStorageBooll = localStorage.getItem('menuOpen') === "false" ? false : true

  const [menuOpen, setMenuOpen] = useState(localStorageBooll);

  useEffect(() => {
    window.localStorage.setItem('menuOpen', menuOpen);
  }, [menuOpen]);


  const onMenuOpen = (data) => {
    setMenuOpen(data);
  };


  return (
    <div className="carsList--page">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div style={{ display: "flex" }}>
        <Menu />
        <List engineFrom={engineFrom} engineTo={engineTo} sortingOption={sortingOption} sortedData={sortedData} setSortingOption={setSortingOption} onMenuOpen={onMenuOpen} selectedTypes={selectedTypes} priceFrom={priceFrom} priceTo={priceTo} yearFrom={yearFrom} yearTo={yearTo} mileage={mileage} />   {/*convertDollarsToUAH={convertDollarsToUAH}*/}
        <Filter setColor={setColor} colorType={color} engineTo={engineTo} setEngineTo={setEngineTo} setEngineFrom={setEngineFrom} engineFrom={engineFrom} mileage={mileage} modelsType={modelsType} selectedTypess={selectedTypes} driveUnitType={driveUnit} fuelType={fuel} stateType={state} regionType={region} brandType={brandType} vehicleType={vehicleType} yearTo={yearTo} yearFrom={yearFrom} priceTo={priceTo} mileage={mileage} priceFrom={priceFrom} setMileage={setMileage} setDriveUnit={setDriveUnit} setFuel={setFuel} setState={setState} setRegion={setRegion} setVehicleType={setVehicleType} setBrandType={setBrandType} setModelsType={setModelsType} setExchange={setExchange} setSelectedTypes={setSelectedTypes} setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} setYearFrom={setYearFrom} setYearTo={setYearTo} dataFromChild={menuOpen} exchange={exchange} />
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