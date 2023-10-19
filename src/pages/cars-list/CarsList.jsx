import React, { useState } from "react";
import "./CarsList.css"
import Header from "../Header";
import Menu from "./components/Menu";
import Filter from "./components/Filter";
import List from "./components/List";

const carData = [
  {
    id: 1,
    name: "Tesla Model X 2022",
    type: "Passenger",
    price: 10000,
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    breand: "Mersedes-Benz",
    image:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
    model: "Q8"
  },
  {
    id: 2,
    name: "Volkswagen Passat 2020",
    type: "Passenger",
    price: 4000,
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    breand: "Kia",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
    model: "Q8"
  },
  {
    id: 3,
    name: "Volkswagen Tiguan 2022",
    type: "Passenger",
    price: 1000,
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    breand: "Audi",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "Q8"
  },
  {
    id: 4,
    name: "Audi Q5",
    type: "Ship",
    price: 6700,
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    breand: "Skoda",
    image:
      "https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp",
    model: "Q8"
  },
  {
    id: 5,
    name: "Skoda",
    type: "Plane",
    price: 7000,
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    breand: "Tesla",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
    model: "Q8"
  },
  {
    id: 6,
    name: "Kia",
    type: "Plane",
    price: 5000,
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    breand: "Tesla",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
    model: "Q8"
  },
];



const CarsList = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [sortingOption, setSortingOption] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [brandType, setBrandType] = useState('');
  const [modelType, setModelType] = useState('');

  /*  let filteredData = .filter(i => i.type === "Audi")*/

  const filteredData = carData.filter((car) =>
    car.breand.toLowerCase().includes(searchTerm.toLowerCase())
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

    if (brandType && brandType !== 'option1') {
      sortedArray = sortedArray.filter(car =>
        car.breand.toLowerCase().includes(brandType.toLowerCase())
      );
    }

    return sortedArray;
  };

  const sortedData = sortData();






  return (
    <div className="carsList--page">
      <Header setSearchTerm={setSearchTerm} />
      <div style={{ display: "flex" }}>
        <Menu />
        <List sortedData={sortedData} setSortingOption={setSortingOption} />
        <Filter setVehicleType={setVehicleType} setBrandType={setBrandType} />
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