import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import PlaceIcon from '@mui/icons-material/Place';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Link } from "react-router-dom";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import "../CarsList.css"
import { useEffect } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSortingOption } from '../../../store/reducers/FilterSlice';




const List = ({sortedData, onMenuOpen, selectedTypes }) => {   /*convertDollarsToUAH, convertDollarsToEUR, convertDollarsToPLN */

const { mileage, priceFrom, priceTo, yearFrom, yearTo, engineFrom, engineTo, sortingOption } = useSelector((state) => state.FilterReducer);
const dispatch = useDispatch();

/*
const [convertedPrices, setConvertedPrices] = useState([]);

const [selectedCurrency, setSelectedCurrency] = useState('grn');


const handleCurrencyChange = (e) => {
  const currency = e.target.value;
  window.localStorage.setItem('currency', currency);
  setSelectedCurrency(currency);
};

useEffect(() => {
  // Функція для конвертації цін
  const convertPrices = async () => {
    const prices = await Promise.all(
      sortedData.map(async (car) => {
        let convertedPrice;

        switch (selectedCurrency) {
          case 'usa':
            convertedPrice = `${car.price} $`;
            break;
          case 'grn':
            convertedPrice = `${await convertDollarsToUAH(car.price)} ₴`;
            break;
          case 'eur':
            convertedPrice = `${await convertDollarsToEUR(car.price)} €`; 
            break;
            case 'pln':
              convertedPrice = `${await convertDollarsToPLN(car.price)} zł`;
              break;
          default:
            convertedPrice = `${ car.price} $`;
        }

        return {
          ...car,
          convertedPrice,
        };
      })
    );

    setConvertedPrices(prices);
  };

  // Викликаємо функцію конвертації при завантаженні сторінки або зміні валюти
  convertPrices();
}, [selectedCurrency, sortedData, convertDollarsToUAH, convertDollarsToEUR, convertDollarsToPLN]);
  
*/

  const localStorageMenu = localStorage.getItem('menuOpenIcon') === "false" ? false : true
  const localStorageLine = localStorage.getItem('line') === "false" ? false : true
 
  const [menuOpen, setMenuOpen] = useState(localStorageMenu);
  const [line, setLine] = useState(localStorageLine)
  const [selectedCurrency, setSelectedCurrency] = useState(localStorage.getItem('selectedCurrency') || 'usa');

  useEffect(() => {
    window.localStorage.setItem('menuOpenIcon', menuOpen);
    window.localStorage.setItem('line', line);
    window.localStorage.setItem('selectedCurrency', selectedCurrency);
  }, [menuOpen, line, selectedCurrency]);



  const filterByTypeOfCar = (car) => {
    return selectedTypes.length === 0 || selectedTypes.includes(car.typeOfCar) &&
      (priceFrom === '' || car.price >= parseFloat(priceFrom)) &&
      (priceTo === '' || car.price <= parseFloat(priceTo)) &&
      (yearFrom === '' || car.year >= parseFloat(yearFrom)) &&
      (yearTo === '' || car.year <= parseFloat(yearTo)) &&
      (mileage === '' || car.mileage <= parseFloat(mileage)) &&
      (engineFrom === '' || car.engine >= parseFloat(engineFrom)) &&
      (engineTo === '' || car.engine <= parseFloat(engineTo))
  };

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleCloseIconClick = () => {
    setMenuOpen(prev => !prev);
    onMenuOpen(menuOpen)
  };


  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setImageModalOpen(false);
  };



  return (
    <>
      <div className="center-page">
        <div className="center-page-top-one">
          <h2 >Car market</h2>
          <div className="center-page-top-two">
            <p1>Sort by</p1>
            <select
              className="sort--select"
              style={{ marginRight: '26px', marginLeft: '14px' }}
              /*onChange={handleCurrencyChange}*/
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}  /*це видалити коли курс вмикати*/ 
             
            >
              <option value="usa">USA</option>
              <option value="grn">UAH</option>
              <option value="eur">EUR</option>
              <option value="pln">PLN</option>
            </select>
            <select
              className="sort--select"
              style={{ marginRight: '26px', marginLeft: '14px' }}
              onChange={(e) => dispatch(updateSortingOption(e.target.value))}
              value={sortingOption}
            >
              <option value="option1">sort by</option>
              <option value="option2">sort by name</option>
              <option value="option3">sort by price</option>
            </select>
            <MenuIcon onClick={e => setLine(false)} style={{ marginRight: '8' }} />
            <AppsIcon onClick={e => setLine(true)} />
            {menuOpen ? <FilterAltOffIcon className="close--icon" onClick={handleCloseIconClick} /> : < FilterAltIcon className="close--icon" onClick={handleCloseIconClick} />}
          </div>
        </div>
        <div style={{ justifyContent: "center" }} className="card--list--cars">
          {line ? (
            sortedData.length > 1 ? (
              sortedData   /*convertedPrices */
                .filter(filterByTypeOfCar)  //походу не потрібно 
                .map((car) => (   
                  <div className="card--list--car" key={car.id}>
                    <img
                      className="car-image"
                      src={car.image}
                      alt="car"
                      onClick={() => handleImageClick(car.image)}
                    />
                    <Link style={{ textDecoration: 'none' }} to={`/about/${car.id}`}>
                      <div className="car-btn">
                        <h3 className="car-name">{car.breand}</h3>
                        <button className="btn-used">Used</button>
                      </div>
                      <div className="price-car">
                        <p1 className="price-dollar">{`${car.price} $`} </p1>   {/*{`${car.convertedPrice} ₴`} */}
                      </div>
                      <div className="line--two"></div>
                      <div className="four--change" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ flex: "45%", marginBottom: "6px" }}>
                          <label className="form-control--four icon-car">
                            <SpeedIcon />
                            {car.distance}
                          </label>
                        </div>
                        <div style={{ flex: "45%", marginBottom: "6px" }}>
                          <label className="form-control--four icon-car">
                            <PlaceIcon />
                            {car.sity}
                          </label>
                        </div>
                        <div className="icon-car" style={{ flex: "45%" }}>
                          <label className="form-control--four icon-car">
                            <LocalGasStationIcon />
                            {car.fuel}
                          </label>
                        </div>
                        <div style={{ flex: "45%" }}>
                          <label className="form-control--four icon-car">
                            <HandymanIcon />
                            {car.driveUnit}
                          </label>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
            )
              : (sortedData.length == 1) ?
                sortedData   /*convertedPrices */
                  .filter(filterByTypeOfCar) // Додаємо фільтрацію за типом автомобіля
                  .map((car) => (    
                    <div className="card--list--car" style={{ marginLeft: "48px", marginRight: "49px", display: "flex", height: "234px" }} key={car.id}>
                      <img
                        className="car-image"
                        src={car.image}
                        alt="car"
                        onClick={() => handleImageClick(car.image)}
                      />
                      <Link style={{ textDecoration: 'none' }} to={`/about/${car.id}`}>
                        <div className="car-btn">
                          <h3 className="car-name">{car.breand}</h3>
                          <button className="btn-used">Used</button>
                        </div>
                        <div className="price-car">
                          <p1 className="price-dollar">{`${car.price} $`} </p1>   {/*{`${car.convertedPrice} ₴`} */}
                        </div>
                        <div className="line--two"></div>
                        <div className="four--change" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '35px' }}>
                          <div style={{ flex: "45%", marginBottom: "6px" }}>
                            <label className="form-control--four icon-car">
                              <SpeedIcon />
                              {car.distance}
                            </label>
                          </div>
                          <div style={{ flex: "45%", marginBottom: "6px" }}>
                            <label className="form-control--four icon-car">
                              <PlaceIcon />
                              {car.sity}
                            </label>
                          </div>
                          <div className="icon-car" style={{ flex: "45%" }}>
                            <label className="form-control--four icon-car">
                              <LocalGasStationIcon />
                              {car.fuel}
                            </label>
                          </div>
                          <div style={{ flex: "45%" }}>
                            <label className="form-control--four icon-car">
                              <HandymanIcon />
                              {car.driveUnit}
                            </label>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                : (
                  <div style={{ width: "823px", fontSize: '24px', textAlign: 'center', marginTop: '20px', }}>Немає автомобілів</div>
                )
          ) : (
            sortedData    /*convertedPrices */
              .filter(filterByTypeOfCar) // Додаємо фільтрацію за типом автомобіля
              .map((car) => (    
                <div className="card--list--car" style={{ marginLeft: "48px", marginRight: "49px", display: "flex", height: "234px" }} key={car.id}>
                  <img
                    className="car-image"
                    src={car.image}
                    alt="car"
                    onClick={() => handleImageClick(car.image)}
                  />
                  <Link style={{ textDecoration: 'none' }} to={`/about/${car.id}`}>
                    <div className="car-btn">
                      <h3 className="car-name">{car.breand}</h3>
                      <button className="btn-used">Used</button>
                    </div>
                    <div className="price-car">
                      <p1 className="price-dollar">{`${car.price} $`} </p1>   {/*{`${car.convertedPrice} ₴`} */}
                    </div>
                    <div className="line--two"></div>
                    <div className="four--change" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '35px' }}>
                      <div style={{ flex: "45%", marginBottom: "6px" }}>
                        <label className="form-control--four icon-car">
                          <SpeedIcon />
                          {car.distance}
                        </label>
                      </div>
                      <div style={{ flex: "45%", marginBottom: "6px" }}>
                        <label className="form-control--four icon-car">
                          <PlaceIcon />
                          {car.sity}
                        </label>
                      </div>
                      <div className="icon-car" style={{ flex: "45%" }}>
                        <label className="form-control--four icon-car">
                          <LocalGasStationIcon />
                          {car.fuel}
                        </label>
                      </div>
                      <div style={{ flex: "45%" }}>
                        <label className="form-control--four icon-car">
                          <HandymanIcon />
                          {car.driveUnit}
                        </label>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
          )}
        </div>
      </div>
      <Dialog open={imageModalOpen} onClose={handleImageModalClose}>
        <DialogContent>
          <img src={selectedImage} alt="large-car-image" style={{ width: '100%' }} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default List;