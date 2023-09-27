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
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ height: 560, width: 240, backgroundColor: 'rgba(211, 211, 211, 0.1)', margin: 16 }}>
            <h1>Фільтр авто</h1>

            <div style={{ margin: 5}}>
                <label style={{ fontWeight: 'bold'}}>Стан авто</label>
                <div>
                    <input type="checkbox" ></input>
                    <label>Б/У</label>
                </div>
                <div>
                    <input type='checkbox' ></input>
                    <label>Нові</label>
                </div>
               
            </div>


            <div style={{ margin: 5}}>
                <label style={{ fontWeight: 'bold'}}>Об'єм двигуна</label>
                <div style={ {display:'flex', gap: 10 }}>
                    <input type='number' min="0" placeholder="від" style={{ width: '100%', boxSizing: 'border-box' }}></input>
                    <input type="number" min="0" placeholder="до" style={{ width: '100%', boxSizing: 'border-box' }}></input>
                </div>
               
            </div>

            <div style={{ margin: 5}}>
                <label style={{ fontWeight: 'bold'}}>Рік</label>
                <div style={{ display: 'flex', gap: 10 }}>
                <input type='number' min="0" placeholder="від" style={{ width: '100%', boxSizing: 'border-box' }} ></input>
                <input type="number" min="0" placeholder="до" style={{ width: '100%', boxSizing: 'border-box' }}></input>
                </div>
            </div>
            
            <div style={{ margin: 5}}>
                <label style={{ fontWeight: 'bold'}}>Пробіг(тис. км)</label>
                <div style={{ display: 'flex', gap: 10 }}>
                    <input type='number' min="0" placeholder="від" style={{ width: '100%', boxSizing: 'border-box' }}></input>
                    <input type="number" min="0" placeholder="до" style={{ width: '100%', boxSizing: 'border-box' }}></input>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection:'column', margin: 5}}>
                <label style={{ fontWeight:'bold' }}>Марка</label>
                <select>
                    <option>Mercedes</option>
                    <option>Audi</option>
                    <option>Skoda</option>
                    <option>Volkswagen</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 5}}>
                <label style={{ fontWeight: 'bold'}}>Модель</label>
                <select>

                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 5 }}>
                <label style={{ fontWeight: 'bold'}}>Область</label>
                <select>
                    <option>Львівська</option>
                    <option>Київська</option>
                    <option>Луганська</option>
                    <option>Житомирська</option>
                    <option>Запорізька</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 5}}>
                <label style={{ fontWeight: 'bold' }}>Коробка передач</label>
                <div>
                    <input type='checkbox'></input>
                    <label>Ручна / Механіка</label>
                </div>
               <div>
                <input type='checkbox'></input>
                    <label>Автомат</label>
               </div>
            </div>

            

            <div style={{ margin: 5 }}>
                <Button style={{ fontWeight: 'bold'}}>
                    Search
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
            <CardContent style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
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
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary">
                  More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarsList;
