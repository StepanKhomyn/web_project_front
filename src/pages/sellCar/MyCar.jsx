import { Breadcrumbs, Button, Card, CardActions, CardContent, Container, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./MyCar.css"

const MyCar = () => {

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
    ]

    const [carsData , setcarsData] = useState(carData)

    const deleteCars = (carId) => {
        setcarsData(carsData.filter(car => car.id !== carId));
    };
    
      

    const [soldStatus, setSoldStatus] = useState({});

    const handleSoldClick = (carId) => {
        setSoldStatus((prevStatus) => ({
            ...prevStatus,
            [carId]: !prevStatus[carId],
        }));
    };

    const navigate = useNavigate();

    return (
        <> 
            <Container style={{display: "flex", justifyContent: "center" }}>
                <Breadcrumbs aria-label="breadcrumb" mt={4} mb={1}>    
                    <Typography color="text.primary">СПИСОК АВТО</Typography>
                     <Link to={"/sell"} style={{ color: "#00ADB5"}}>
                        <Button >
                            Продаж автомобіля
                        </Button>
                    </Link>
                </Breadcrumbs>
            </Container>
            <Container style={{ display: "flex", justifyContent: "center", marginTop: 16, marginBottom: 16, width: 760 }}>
                <InputBase className='search-car'
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Container>
            <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {carsData.length === 0 ? (
                    <Typography variant="h5" style={{ marginTop: 20 }}>
                        Оголошень немає
                    </Typography>
                ) : (
                    carsData.map((car) => (
                    <div key={car.id} style={{ marginBottom: '16px' }}>
                        <Card style={{ width: 760, display: "flex", position: 'relative' }}>
                            {soldStatus[car.id] && (
                                <div className='sold-status'>
                                    <p1 style={{ marginRight: 380 }} > Продано</p1>
                                </div>
                            )}
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
                                            Більше
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outlined"
                                        style={{ color: 'green', marginLeft: 8 }}
                                        onClick={() => handleSoldClick(car.id)}
                                    >
                                        {soldStatus[car.id] ? 'Відмінити' : 'Продано'}
                                    </Button>
                                    <Button onClick={() => deleteCars(car.id)} variant="outlined" style={{ color: "red" }}>
                                        Видалити
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </div>
                )))}
            </Container>
        </>

    )
}

export default MyCar;

