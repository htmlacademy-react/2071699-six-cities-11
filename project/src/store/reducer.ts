import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getCurrentPoint} from './action';
import {offers} from '../mocks/offers';
import {OfferType, CityType, LocationType} from '../types/offers';


const initialState : {
  selectedCity: CityType ;
  offers: OfferType[];
  selectedPoint: LocationType | null;
} = {
  selectedCity: offers[0].city ,
  offers: [offers[0]],
  selectedPoint: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const currentcity = action.payload.city;
      const offersForCity = action.payload.offersForCity;
      state.selectedCity = offersForCity[0]?.city
        || { //Это временно!!!
          location: {
            latitude: 0,
            longitude: 0,
            zoom: 10
          },
          name: currentcity
        }; //Если для выбранного города нет предложений то в переменную записываем город с нулевыми координатами, т.к. в массиве данных города нет,

      state.offers = offersForCity;
    })

    .addCase(getCurrentPoint, (state, action) => {
      state.selectedPoint = action.payload || null;
    });
});

export {reducer};
