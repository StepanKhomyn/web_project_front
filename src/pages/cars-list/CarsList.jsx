import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const carData = [
    { id: 1, name: 'Car 1', description: 'This is Car 1', image: 'https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp' },
    { id: 2, name: 'Car 2', description: 'This is Car 2', image: 'https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg' },
    { id: 3, name: 'Car 3', description: 'This is Car 3', image: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp' },
    { id: 4, name: 'Car 4', description: 'This is Car 4', image: 'https://cdn4.riastatic.com/photosnew/auto/photo/peugeot_4007__516197674f.webp' },
    { id: 5, name: 'Car 5', description: 'This is Car 5', image: 'https://cdn.riastatic.com/photos/ria/news_text/16/1692/169281/169281.jpg' },
    { id: 6, name: 'Car 6', description: 'This is Car 6', image: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-id-4-crozz__2080542-620x465x72.webp' },
];

const CarsList = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {carData.map((car) => (
                    <Card key={car.id} style={{ width: 250, margin: 16 }}>
                        <img
                            src={car.image}
                            alt={car.name}
                            style={{ height: 140, objectFit: 'cover', width: '100%' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {car.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {car.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CarsList;
