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
import UploadImg from "./UploadImg";



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
    fuel_per_fm: "",
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

  const states = [
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

  const driveUnitType = [
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
  return (
    <div className="sell-container">
      <Header />
      <div style={{ display: "flex", width: "100%" }}>
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
                      {typeOfCar.map((typeCar) => (
                          <MenuItem key={typeCar.typeCar} value={typeCar.typeCar}>
                            {typeCar.typeCar}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.transportType}</FormHelperText>

                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.brand}>
                    <InputLabel htmlFor="transport-brand">Марка</InputLabel>
                    <Select
                        labelId="transport-brand"
                        id="transport-brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        required
                    >
                      {brand.map((brandItem) => (
                          <MenuItem key={brandItem.brand} value={brandItem.brand}>
                            {brandItem.brand}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.brand}</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.model}>
                    <InputLabel htmlFor="transport-model">Модель</InputLabel>
                    <Select
                        labelId="transport-model"
                        id="transport-model"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        required
                    >
                      {modelsByBrand[formData.brand] && modelsByBrand[formData.brand].map((model) => (
                          <MenuItem key={model} value={model}>
                            {model}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.model}</FormHelperText>
                  </FormControl>
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

             <UploadImg/>

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
                    <InputLabel htmlFor="transmission-transmissionType">Тип коробки передач</InputLabel>
                    <Select
                      labelId="transmission-transmissionType"
                      id="transmission-transmissionType"
                      name="transmissionType"
                      value={formData.transmissionType}
                      onChange={handleInputChange}
                      required
                    >
                      {driveUnitType.map((option) => (
                        <MenuItem key={option.driveUnit} value={option.driveUnit}>
                          {option.driveUnit}
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
                    <FormHelperText>{validationErrors.driveType}</FormHelperText>

                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Витрати пального (л/100 км)"
                    name="fuel_per_fm"
                    value={formData.fuel_per_fm}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.color}>
                    <InputLabel htmlFor="transport-color">Колір</InputLabel>
                    <Select
                        labelId="transport-color"
                        id="transport-color"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                        required
                    >
                      {color.map((brandItem) => (
                          <MenuItem key={brandItem.color} value={brandItem.color}>
                            {brandItem.color}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.color}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.condition}>
                    <InputLabel htmlFor="transport-condition">Технічний стан</InputLabel>
                    <Select
                        labelId="transport-condition"
                        id="transport-condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        required
                    >
                      {states.map((option) => (
                          <MenuItem key={option.state} value={option.state}>
                            {option.state}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.condition}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.fuel}>
                    <InputLabel htmlFor="transport-fuel">Тип пального</InputLabel>
                    <Select
                        labelId="transport-fuel"
                        id="transport-fuel"
                        name="fuel"
                        value={formData.fuel}
                        onChange={handleInputChange}
                        required
                    >
                      {fuel.map((option) => (
                          <MenuItem key={option.fuel} value={option.fuel}>
                            {option.fuel}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.fuel}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      fullWidth
                      label="Пробіг"
                      name="car_run"
                      value={formData.car_run}
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
            {/* Локація */}
            <Box className="box-container">
              <Typography variant="h6" component="h2" gutterBottom>
                Локація
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth error={!!validationErrors.region}>
                    <InputLabel htmlFor="transport-region">Регіон</InputLabel>
                    <Select
                        labelId="transport-region"
                        id="transport-region"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required
                    >
                      {region.map((option) => (
                          <MenuItem key={option.region} value={option.region}>
                            {option.region}
                          </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{validationErrors.region}</FormHelperText>
                  </FormControl>
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