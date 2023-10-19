import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Breadcrumbs,
  Link,
  Grid,
  Box,
} from "@mui/material";
import "./SellCar.css"
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Menu from "../cars-list/components/Menu";
const SellCar = () => {
  const [formData, setFormData] = useState({
    transportType: "",
    brand: "",
    model: "",
    year: "",
    engineVolume: "",
    transmissionType: "",
    region: "",
    city: "",
    description: "",
    color: "",
    condition: "",
    hasAccident: false,
    price: "",
    phoneNumber: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    transportType: "",
    brand: "",
    model: "",
    year: "",
    engineVolume: "",
    transmissionType: "",
    region: "",
    city: "",
    description: "",
    color: "",
    condition: "",
    hasAccident: "",
    price: "",
    vin_code: "",
    car_run: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedValidationErrors = { ...validationErrors };
    updatedValidationErrors[name] = "";

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setValidationErrors(updatedValidationErrors);
  };

  const validateForm = () => {
    const errors = {};

    if (formData.transportType === "") {
      errors.transportType = "Тип транспорту є обов'язковим";
    }

    if (formData.brand === "") {
      errors.brand = "Марка є обов'язковою";
    }

    if (formData.model === "") {
      errors.model = "Модель є обов'язковою";
    }

    if (formData.year === "") {
      errors.year = "Рік випуску є обов'язковим";
    }

    // Add more validations for other fields

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      // Add logic to save or send data here
      console.log(formData);
    }
  };

  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
  const transmissionOptions = ["Ручна/Механіка", "Автомат", "Робот", "Варіатор"];
  const driveOptions = ["Передній", "Задній", "Повний"];

  return (
    <div style={{marginLeft: "70px", marginRight: "70px"}}>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <Container  className="form-container">
          <Container style={{ display: "flex", justifyContent: "center", }}>
            <Breadcrumbs aria-label="breadcrumb" mb={2}>
              <Link onClick={() => navigate("/mycar")} style={{ color: "#00ADB5" }}>
                <Button>
                  Список авто
                </Button>
              </Link>
              <Typography color="text.primary">ПРОДАЖ АВТОМОБІЛЯ</Typography>
            </Breadcrumbs>
          </Container>
          <form onSubmit={handleSubmit}>
            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom className="section-title">
                Основна інформація
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.transportType}>
                    <InputLabel htmlFor="transport-type">Тип транспорту</InputLabel>
                    <Select
                      labelId="transport-type"
                      id="transport-type"
                      name="transportType"
                      value={formData.transportType}
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="Легкові">Легкові</MenuItem>
                      <MenuItem value="Мото">Мото</MenuItem>
                      <MenuItem value="Вантажівки">Вантажівки</MenuItem>
                      <MenuItem value="Автобуси">Автобуси</MenuItem>
                      <MenuItem value="Сільгосптехніка">Сільгосптехніка</MenuItem>
                    </Select>
                    <FormHelperText>{validationErrors.transportType}</FormHelperText>

                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Марка"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Модель"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="year">Рік випуску</InputLabel>
                    <Select
                      labelId="year"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Зовнішній вид (фотографії)
              </Typography>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  // Handle file uploads here
                }}
              />
            </Box>

            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Опис
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Опис"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Box>

            {/* Характеристики */}
            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Характеристики
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Об'єм двигуна"
                    name="engineVolume"
                    value={formData.engineVolume}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="transmission-type">Тип коробки передач</InputLabel>
                    <Select
                      labelId="transmission-type"
                      id="transmission-type"
                      name="transmissionType"
                      value={formData.transmissionType}
                      onChange={handleInputChange}
                      required
                    >
                      {transmissionOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="drive-type">Привід</InputLabel>
                    <Select
                      labelId="drive-type"
                      id="drive-type"
                      name="driveType"
                      value={formData.driveType}
                      onChange={handleInputChange}
                      required
                    >
                      {driveOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Витрати пального (л/100 км)"
                    name="transmissionType"
                    value={formData.transmissionType}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Колір"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Технічний стан"
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.hasAccident}
                        onChange={handleInputChange}
                        name="hasAccident"
                        color="primary"
                      />
                    }
                    label="Чи був в ДТП"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Локація
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Регіон"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Місто"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>
            {/* Локація */}
            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Локація
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Регіон"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Місто"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>

            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Вартість
              </Typography>
              <TextField
                fullWidth
                label="Вартість"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </Box>

            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Телефон продавця
              </Typography>
              <TextField
                fullWidth
                label="Телефон продавця"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Box>
            <div className="button-container">
              <Button
                color="primary"
                type="submit"
                variant="outlined" style={{ color: "#00ADB5" }}
              >
                Розмістити оголошення
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default SellCar;