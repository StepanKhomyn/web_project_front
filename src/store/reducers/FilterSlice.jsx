import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchTerm: localStorage.getItem("searchTerm") || "",
    mileage: localStorage.getItem('mileage') || '',
    priceFrom: localStorage.getItem('priceFrom') || '',
    priceTo: localStorage.getItem('priceTo') || '',
    yearFrom: localStorage.getItem('yearFrom') || 1900,
    yearTo: localStorage.getItem('yearTo') || '',
    vehicleType: localStorage.getItem('vehicleType') || '',
    brandType: localStorage.getItem('brandType') || '',
    modelsType: localStorage.getItem('modelsType') || '',
    regionType: localStorage.getItem('region') || '',
    stateType: localStorage.getItem('state') || '',
    fuelType: localStorage.getItem('fuel') || '',
    colorType: localStorage.getItem('color') || '',
    driveUnit: localStorage.getItem('driveUnit') || '',
    engineFrom: localStorage.getItem('engineFrom') || 0.5,
    engineTo: localStorage.getItem('engineTo') || '',
    sortingOption: localStorage.getItem('sortingOption') || '',
    exchange: localStorage.getItem('exchange') === "true" ? true : false,
    isAuth: false

  };
  
  export const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      updateSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
      updateMileage: (state, action) => {
        state.mileage = action.payload;
      },
      updatePriceFrom: (state, action) => {
        state.priceFrom = action.payload;
      },
      updatePriceTo: (state, action) => {
        state.priceTo = action.payload;
      },
      updateYearFrom: (state, action) => {
        state.yearFrom = action.payload;
      },
      updateYearTo: (state, action) => {
        state.yearTo = action.payload;
      },
      updateVehicleType: (state, action) => {
        state.vehicleType = action.payload;
      },
      updateBrandType: (state, action) => {
        state.brandType = action.payload;
      },
      updateModelsType: (state, action) => {
        state.modelsType = action.payload;
      },
      updateRegion: (state, action) => {
        state.regionType = action.payload;
      },
      updateState: (state, action) => {
        state.stateType = action.payload;
      },
      updateFuel: (state, action) => {
        state.fuelType = action.payload;
      },
      updateColor: (state, action) => {
        state.colorType = action.payload;
      },
      updateDriveUnit: (state, action) => {
        state.driveUnit = action.payload;
      },
      updateEngineFrom: (state, action) => {
        state.engineFrom = action.payload;
      },
      updateEngineTo: (state, action) => {
        state.engineTo = action.payload;
      },
      updateSortingOption: (state, action) => {
        state.sortingOption = action.payload;
      },
      updateExchange: (state, action) => {
        state.exchange = action.payload;
      },
      updateIsAuth: (state, action) => {
        state.isAuth = action.payload;
      }
    },
  });
  
  export const { updateSearchTerm, updateMileage, updatePriceFrom, updatePriceTo, updateYearFrom, updateYearTo, updateVehicleType, updateBrandType, updateModelsType, updateRegion, updateState, updateFuel, updateColor, updateDriveUnit, updateEngineFrom, updateEngineTo, updateSortingOption, updateExchange, updateIsAuth} = FilterSlice.actions;
  
  export default FilterSlice.reducer;