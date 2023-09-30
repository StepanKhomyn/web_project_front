import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Icon,
  Grid,
} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Link } from "react-router-dom";

const carData = [
  {
    id: 1,
    name: "Tesla Model X 2022",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
  },
  {
    id: 2,
    name: "Volkswagen Passat 2020",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
  },
  {
    id: 3,
    name: "Volkswagen Tiguan 2022",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
  },
  {
    id: 4,
    name: "Car 4",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp",
  },
  {
    id: 5,
    name: "Car 5",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
  },
  {
    id: 6,
    name: "Car 6",
    price: "10 000",
    location: "Lviv",
    transmission: "mechanical",
    fuelType: "Gas 1.6",
    distance: "11 000",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
  },
];

const CarsList = () => {
  return (
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
  );
};

export default CarsList;



/*
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const carData = [
  {
    id: 1,
    name: "Car 1",
    description: "This is Car 1",
    image:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
  },
  {
    id: 2,
    name: "Car 2",
    description: "This is Car 2",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
  },
  {
    id: 3,
    name: "Car 3",
    description: "This is Car 3",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
  },
  {
    id: 4,
    name: "Car 4",
    description: "This is Car 4",
    image:
      "https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp",
  },
  {
    id: 5,
    name: "Car 5",
    description: "This is Car 5",
    image:
      "https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg",
  },
  {
    id: 6,
    name: "Car 6",
    description: "This is Car 6",
    image:
      "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp",
  },
];

const CarsList = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent:'end'}}>
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
          <h1>Фільтр авто</h1>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Стан авто</label>
            <div>
              <input type="checkbox"></input>
              <label>Б/У</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Нові</label>
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Об'єм двигуна</label>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="number"
                min="0"
                placeholder="від"
                style={{ width: "100%", boxSizing: "border-box" }}
              ></input>
              <input
                type="number"
                min="0"
                placeholder="до"
                style={{ width: "100%", boxSizing: "border-box" }}
              ></input>
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Рік</label>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="number"
                min="0"
                placeholder="від"
                style={{ width: "100%", boxSizing: "border-box" }}
              ></input>
              <input
                type="number"
                min="0"
                placeholder="до"
                style={{ width: "100%", boxSizing: "border-box" }}
              ></input>
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Пробіг(тис. км)</label>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="number"
                min="0"
                placeholder="від"
                style={{ width: "100%", boxSizing: "border-box" }}
              ></input>
              <input
                type="number"
                min="0"
                placeholder="до"
                style={{ width: "100%", boxSizing: "border-box" }}
              ></input>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Марка</label>
            <select>
              <option>Mercedes</option>
              <option>Audi</option>
              <option>Skoda</option>
              <option>Volkswagen</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Модель</label>
            <select></select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Область</label>
            <select>
              <option>Львівська</option>
              <option>Київська</option>
              <option>Луганська</option>
              <option>Житомирська</option>
              <option>Запорізька</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <label style={{ fontWeight: "bold" }}>Коробка передач</label>
            <div>
              <input type="checkbox"></input>
              <label>Ручна / Механіка</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Автомат</label>
            </div>
          </div>

          <div style={{ margin: 5 }}>
            <Button style={{ fontWeight: "bold" }}>Search</Button>
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
            <Card
              key={car.id}
              style={{ width: 760, margin: 16, display: "flex" }}
            >
              <img
                src={car.image}
                alt={car.name}
                style={{ width: 380, height: 250, objectFit: "cover" }}
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {car.description}
                </Typography>
                <CardActions style={{ marginTop: "auto" }}>
                  <Button size="small" color="primary">
                    More
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsList;*/
