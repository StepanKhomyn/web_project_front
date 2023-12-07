import React from 'react'
/*import './AboutCar.css'*/
import {
  IconButton,
  Avatar,
} from "@mui/material";
import Header from '../Header';
import Menu from '../cars-list/components/Menu';
import RightMenu from './components/RightMenu';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AboutCar = () => {

  const { id } = useParams();
  const [car, setCar] = useState({});
  console.log(id)

  useEffect(() => {
    // Функція для отримання даних автомобіля за id
    const fetchCarData = async () => {
      try {
        const response = await axios.get(`api/cars/${id}`, { baseURL: 'http://localhost:5000/' });
        setCar(response.data);
      } catch (error) {
        console.error('Помилка отримання даних автомобіля', error);
      }
    };

    // Виклик функції отримання даних
    fetchCarData();
  }, [id]);

  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // Ваш ключ API
        const apiKey = 'a29f960547f0dd13e76a0a05';

        const response = await axios.get(`https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`);
        setExchangeRate(response.data.rates.UAH);
      } catch (error) {
        console.error('Помилка отримання курсу обміну', error);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <div className="carsList--page">
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <div className='central-div'>
          <div><h2>{car.breand}</h2></div>
          <div className='image-seller'>
            <div className='image-div'>
              <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            </div>
            {/* <div>
              <dl style={{ display: "flex", flexWrap: "wrap", marginLeft: "16px" }}>
                <dt class="defines_list_title">Тип транспорту</dt>
                <dd class="defines_list_value">Легкові</dd>
                <dt class="defines_list_title">Марка</dt>
                <dd class="defines_list_value">Tesla</dd>
                <dt class="defines_list_title">Модель</dt>
                <dd class="defines_list_value">Model X</dd>
                <dt class="defines_list_title">Рік випуску</dt>
                <dd class="defines_list_value">2022</dd>
              </dl>
            </div> */}
            <div className='about-seller'>
              <div style={{ flexWrap: "wrap", fontSize: '26px' }} >Продавець</div>
              <div className='seller'>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="" />
                </IconButton>
                <div style={{ marginLeft: '8px' }}>
                  <div style={{ fontSize: '18px' }}>Юрій Кость</div>
                  <div style={{ fontSize: '14px' }}>На сайті був о 04:21</div>
                </div>
              </div>
              <div className='seller'>
                <div>
                  <svg style={{ width: "16", height: "15", viewBox: "0 0 16 15", xmlns: "http://www.w3.org/2000/svg" }}>
                    <path d="M8 5.67663e-08L10.4242 4.88095L16 5.71429L12 9.52381L12.9697 15L8 12.5L3.0303 15L4 9.52381L-2.88992e-08 5.71429L5.57576 4.88095L8 5.67663e-08Z"></path>
                  </svg>
                </div>
                <div className='left-marg'>4.5 <Link to="/reviews"> оцінка продавця </Link> від 16 покупців</div>
              </div>
              <div className='seller'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: "15", height: "15" }}>
                    <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                </div>
                <div className='left-marg'>
                  <a href="">Пропозицій продавця: 5</a>
                </div>
              </div>
              <div className='seller'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: "15", height: "15" }}>
                    <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                </div>
                <div className='left-marg'>Перевірений банком</div>
              </div>
              <div className='seller'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: "15", height: "15" }}>
                    <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                </div>
                <div className='left-marg'>Перевірений телефон</div>
              </div>
              <div className='number' style={{ marginTop: '10px', textalign: 'center' }}>
                <h2>0985375484</h2>
              </div>
              <div>
                <Link to={'/Messages'}>
                  <button className='btn-chat' style={{ width: '100%', display: 'flex', height: '40px' }}>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MessageIcon">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                    </svg>
                    <span>Написати в чат</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div style={{ display: 'block' }}>
            <div className='test'>
              <span className='price'>{car.price} $</span>
              <span class="point" className='span-point price-ua'>•</span>
              <span className='price-ua' >
                {car.price * exchangeRate} ₴
              </span>
              <span class="point" className='span-point price-ua'>•</span>
              <span className='price-ua' >
                9000 Є
              </span>
              {/* <span class="point" className='price-ua'>•</span>
              <div className='price-ua'>
                <label class="form-control--four">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                    <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                  </svg>
                  11 000
                </label>
              </div>
              <span class="point" className='price-ua'>•</span>
              <div className='price-ua'>
                <label class="form-control--four">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlaceIcon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                  Lviv
                </label>
              </div>
              <span class="point" className='price-ua'>•</span>
              <div className='price-ua'>
                <label class="form-control--four">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalGasStationIcon">
                    <path d="m19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                  </svg>
                  Gas 1.6
                </label>
              </div>
              <span class="point" className='price-ua'>•</span>
              <div className='price-ua'>
                <label class="form-control--four">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HandymanIcon">
                    <path d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z"></path><path d="m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z"></path>
                  </svg>
                  mechanical
                </label>
              </div> */}
            </div>
            <div className='car-abilities'>
              <div style={{ marginRight: '20px' }}>
                <div className='car-abilities-span' style={{ marginBottom: '16px', display: 'flex' }}>
                  <label class="form-control--four" style={{ width: '200px' }}>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                      <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                    </svg>
                    <span className='margin-for-svg'>Пробіг</span>
                  </label>
                  {car.mileage} км
                </div>
                <div className='car-abilities-span' style={{ display: 'flex' }}>
                  <label class="form-control--four" style={{ width: '200px' }}>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlaceIcon">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    </svg>
                    <span className='margin-for-svg'>Місто</span>
                  </label>
                  <div>
                    {car.sity}
                  </div>
                </div>
              </div>
              <div>
                <div className='car-abilities-span' style={{ marginBottom: '16px', display: 'flex' }}>
                  <label class="form-control--four" style={{ width: '200px' }}>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalGasStationIcon">
                      <path d="m19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                    </svg>
                    <span className='margin-for-svg'>Двигун</span>
                  </label>
                  <div>
                    {car.fuel}
                    <span class="point" className='span-point'>•</span>
                    {car.engine}
                  </div>
                </div>
                <div className='car-abilities-span' style={{ display: 'flex' }}>
                  <label class="form-control--four" style={{ width: '200px' }}>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HandymanIcon">
                      <path d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z"></path><path d="m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z"></path>
                    </svg>
                    <span className='margin-for-svg'>Коробка передач</span>
                  </label>
                  {car.driveUnit}
                </div>
              </div>
            </div>
            <div className='description price-ua'>
              <h3 style={{ margin: '6px 24px' }}>Опис</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum est ut ipsum placerat, in suscipit nibh iaculis. Duis tortor leo, fringilla vitae urna non, aliquam molestie metus. Phasellus rutrum, erat sit amet imperdiet posuere, justo sem dignissim erat, ut mollis libero sapien ut lorem. Mauris sollicitudin dignissim aliquet. Maecenas eu euismod erat, quis pharetra lacus. Sed id augue eget libero mattis porttitor vitae et lorem. Mauris non condimentum velit, et interdum purus.
              </p>
              <p>Aliquam fringilla scelerisque sem, non commodo elit fermentum sed. Nullam sem nunc, consequat vitae lacus ut, sagittis pulvinar ligula. Vivamus elementum fermentum dui vitae posuere. Donec sed odio commodo, cursus risus nec, rutrum est. Donec rutrum urna ut tortor venenatis sagittis. Maecenas commodo ipsum in feugiat vehicula. Ut dictum ipsum est, vitae dictum massa cursus ut. Phasellus imperdiet sem non mi varius, et porta felis eleifend.</p>
            </div>
          </div>
        </div>
        <div>
          <RightMenu carData={car} />
        </div>
      </div>
    </div >

  );

};

export default AboutCar;

// const AboutCar = () => {


//   return (
//     <div className="carsList--page">
//       <div className="right--menu">
//         <div className="logo-rst-exit" >
//           <h1 className="rst" >RST</h1>
//           <TransitEnterexitIcon className="rst--exit"/>
//         </div>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <HomeIcon style={{ marginRight: 10 }} /> Home
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link" >
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <HomeRepairServiceIcon style={{ marginRight: 10 }} /> Car Dealerships
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn">
//             <button className="home" style={{ backgroundColor: "#282828" }}>
//               <div className="right--menu--button" style={{ color: "#FFFFFF" }} >
//                 <DirectionsCarIcon style={{ marginRight: 10 }} /> Car Market
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <SellIcon style={{ marginRight: 10 }} /> Sell a Car
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <ChangeCircleIcon style={{ marginRight: 10 }} /> Car Exchange
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <RecordVoiceOverIcon style={{ marginRight: 10 }} /> Announcements
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <NewspaperIcon style={{ marginRight: 10 }} /> Auto News
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <ReviewsIcon style={{ marginRight: 10 }} /> Reviews
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <TrendingUpIcon style={{ marginRight: 10 }} /> Autosite Rating
//               </div>
//             </button>
//           </div>
//         </Link>
//         <Link to="" className="link">
//           <div className="right--menu--btn" >
//             <button className="home">
//               <div className="right--menu--button" >
//                 <SettingsIcon style={{ marginRight: 10 }} /> Setting
//               </div>
//             </button>
//           </div>
//         </Link>

//         <div className="logout">
//           <Link to="" className="link">
//             <div className="right--menu--btn" style={{ marginTop: "20px" }} >
//               <button className="home">
//                 <div className="right--menu--button" >
//                   <LogoutIcon style={{ marginRight: 10 }} /> Logout
//                 </div>
//               </button>
//             </div>
//           </Link>
//           <div className="post">
//             <div className="post--text">
//               <p className="post--text-add"><b>Post an add,</b>  free,<br /> without registration!</p>
//             </div>
//             <div>
//               <button className="post--btn" >+ Post ad</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="left--menu">
//         <div className="fiteres--menu">
//           <div>
//             <h2 className="filteres" >Filters</h2>
//           </div>
//           <div>
//             <CloseIcon className="close--icon" />
//           </div>
//         </div>
//         <div className="right-menu-list">
//           <div>
//             <button className="all--cards" >All cars</button>
//           </div>
//           <div>
//             <button className="btn--used" > Used</button>
//           </div>
//           <div>
//             <button className="btn--used" >All</button>
//           </div>
//         </div>
//         <div className="exchange--menu">
//           <label class="form-control">
//             <input className="checkbox-exchange" type="checkbox" name="checkbox" />
//             Exchange
//           </label>
//         </div>
//         <div className="line--one"></div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Type of vehicle</h5>
//           <select className="filter--select">
//             <option value="option1">All types</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="filter--select-all">
//           <h5 style={{ margin: "18px 0px 8px 0px" }} className="filter--select--text">Car brand</h5>
//           <select className="filter--select">
//             <option value="option1">All brand</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Car model</h5>
//           <select className="filter--select">
//             <option value="option1">All model</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="line--one"></div>
//         <h3 className="type--of--car">Type of car</h3>
//         <div className="four--change" style={{ display: "flex", flexWrap: "wrap" }}>
//           <div style={{ flex: "45%", marginBottom: "6px" }}>
//             <label className="form-control--four">
//               <input className="checkbox-exchange" type="checkbox" name="checkbox" />
//               Sedan
//             </label>
//           </div>
//           <div style={{ flex: "45%", marginBottom: "6px" }}>
//             <label className="form-control--four">
//               <input className="checkbox-exchange" type="checkbox" name="checkbox" />
//               Minivan
//             </label>
//           </div>
//           <div style={{ flex: "45%" }}>
//             <label className="form-control--four">
//               <input className="checkbox-exchange" type="checkbox" name="checkbox" />
//               SUV pickup
//             </label>
//           </div>
//           <div style={{ flex: "45%" }}>
//             <label className="form-control--four">
//               <input className="checkbox-exchange" type="checkbox" name="checkbox" />
//               Microvan
//             </label>
//           </div>
//         </div>
//         <h3 className="view--all--types">View all types</h3>

//         <div className="line--one"></div>
//         <div className="price-filter">
//           <div>
//             <h5 className="price--from--text">Price from</h5>
//             <input placeholder="Price from" className="price--from--input" />
//           </div>
//           <div >
//             <h5 className="price--from--text">Price to</h5>
//             <input placeholder="Price to" className="price--from--input" />
//           </div>
//         </div>
//         <div className="line--one"></div>
//         <div className="price-filter">
//           <div>
//             <h5 className="price--from--text">Year from</h5>
//             <input placeholder="Year from" className="price--from--input" />
//           </div>
//           <div >
//             <h5 className="price--from--text">Year to</h5>
//             <input placeholder="Year to" className="price--from--input" />
//           </div>
//         </div>
//         <div className="line--one"></div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Region</h5>
//           <select className="filter--select">
//             <option value="option1">All region</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>State</h5>
//           <select className="filter--select">
//             <option value="option1">All state</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="line--one"></div>
//         <h3 className="type--of--car">Additional filters</h3>
//         <div className="additional--filter-two">
//           <div className="">
//             <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Engine from</h5>
//             <select className="additional-select">
//               <option value="option1">-</option>
//               <option value="option2">Варіант 2</option>
//               <option value="option3">Варіант 3</option>
//             </select>
//           </div>
//           <div className="">
//             <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Engine  to</h5>
//             <select className="additional-select">
//               <option value="option1">-</option>
//               <option value="option2">Варіант 2</option>
//               <option value="option3">Варіант 3</option>
//             </select>
//           </div>
//         </div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Fuel</h5>
//           <select className="filter--select">
//             <option value="option1">-</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Checkpoint</h5>
//           <select className="filter--select">
//             <option value="option1">-</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="filter--select-all">
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Drive unit</h5>
//           <select className="filter--select">
//             <option value="option1">-</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//         <div className="filter--select-all" style={{ marginBottom: "40px" }} >
//           <h5 className="filter--select--text" style={{ margin: "18px 0px 8px 0px" }}>Mileage</h5>
//           <select className="filter--select">
//             <option value="option1">-</option>
//             <option value="option2">Варіант 2</option>
//             <option value="option3">Варіант 3</option>
//           </select>
//         </div>
//       </div>

//       {/* <div className='about-car'>
//       <div style={{margin: 40}}>
//      <img src={carData.image} alt={carData.name} style={{ width: 769, height: 480, objectFit: "cover"}} />
//      <div className='test' style={{display: "flex", alignItems:"center"}}>
//      <h2 style={{}}>Tesla Model X 2022</h2>
//      <button className='car-btn' style={{width: 60, height: 30, display: "center"}}>Used</button>
//      </div>
//       <dl style={{display: "flex", flexWrap: "wrap", marginLeft: "16px"}}>
//         <dt class="defines_list_title">Тип транспорту</dt>
//         <dd class="defines_list_value">Легкові</dd>
//         <dt class="defines_list_title">Марка</dt>
//         <dd class="defines_list_value">Tesla</dd>
//         <dt class="defines_list_title">Модель</dt>
//         <dd class="defines_list_value">Model X</dd>
//         <dt class="defines_list_title">Рік випуску</dt>
//         <dd class="defines_list_value">2022</dd>
//       </dl>
//      </div>
//       </div> */}

//       <div className="navbar" >
//         <div>
//           <input placeholder="     Search" className="searh-input" />
//         </div>
//         <div>
//           <button className="sell--button" >Sell a car</button>
//         </div>
//         <div className="navbar--menu" >
//           <div className="navbar--icon">
//             <Link className="navbar--star" to="/favourites">
//               <IconButton>
//                 <StarBorderIcon />
//               </IconButton>
//             </Link>
//             <Link to="/messages">
//               <IconButton>
//                 <MessageIcon />
//               </IconButton>
//             </Link>
//             <Link to="/messages">
//               <IconButton>
//                 <NotificationsIcon />
//               </IconButton>
//             </Link>
//           </div>
//           <IconButton sx={{ p: 0 }}>
//             <Avatar alt="" />
//           </IconButton>
//         </div>
//       </div>
//       <Header/>
//     </div>
//   )
// }

// export default AboutCar



{/* <div  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div>
      <div><h2>Tesla Model X 2022</h2></div>
      <div style={{display: "flex"}}>
     <img src={carData.image} alt={carData.name} style={{ width: 570, height: 375, objectFit: "cover"}} />
      <dl style={{display: "flex", flexWrap: "wrap", marginLeft: "16px"}}>
        <dt class="defines_list_title">Тип транспорту</dt>
        <dd class="defines_list_value">Легкові</dd>
        <dt class="defines_list_title">Марка</dt>
        <dd class="defines_list_value">Tesla</dd>
        <dt class="defines_list_title">Модель</dt>
        <dd class="defines_list_value">Model X</dd>
        <dt class="defines_list_title">Рік випуску</dt>
        <dd class="defines_list_value">2022</dd>
      </dl>
     </div>
    </div>
    </div> */}