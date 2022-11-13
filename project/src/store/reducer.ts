import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getCurrentPoint} from './action';
import {offers} from '../mocks/offers';
import {OfferType, CityType, LocationType} from '../types/offers';


const initialState : {
  selectedCity: CityType ;
  offers: OfferType[];
  selectedPoint: LocationType | undefined;
} = {
  selectedCity: offers[0].city ,
  offers: [offers[0]],
  selectedPoint: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload.city;
      state.offers = action.payload.offersForCity;
    })

    .addCase(getCurrentPoint, (state, action) => {
      state.selectedPoint = action.payload;
    });
});

export {reducer};
