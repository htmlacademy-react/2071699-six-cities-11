import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getCurrentPoint, sortOffersPriceLow, sortOffersPriceHigh, sortOffersPopular, sortOffersRating, sortMenuView} from './action';
import _ from 'lodash';
import {offers} from '../mocks/offers';
import {OfferType, CityType, LocationType} from '../types/offers';
import {SortTypes} from '../constants';


const initialState : {
  selectedCity: CityType;
  offers: OfferType[];
  selectedPoint: LocationType | null;
  sortType: string;
  sortView: string;
  offersNotSort: OfferType[];
} = {
  selectedCity: offers[0].city ,
  offers: [offers[0]],
  selectedPoint: null,
  sortType: SortTypes.Popular,
  sortView: 'closed',
  offersNotSort: [offers[0]],
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
      state.offersNotSort = offersForCity;
      state.sortType = SortTypes.Popular;
      state.sortView = 'closed';
    })

    .addCase(getCurrentPoint, (state, action) => {
      state.selectedPoint = action.payload || null;
    })
    .addCase(sortOffersPriceLow, (state) => {
      state.offers = _.sortBy(state.offers, 'price').reverse();
      state.sortType = SortTypes.PriceLow;
    })
    .addCase(sortOffersPriceHigh, (state) => {
      state.offers = _.sortBy(state.offers, 'price');
      state.sortType = SortTypes.PriceHigh;
    })
    .addCase(sortOffersPopular, (state) => {
      state.offers = state.offersNotSort;
      state.sortType = SortTypes.Popular;
    })
    .addCase(sortOffersRating, (state) => {
      state.offers = _.sortBy(state.offers, 'rating');
      state.sortType = SortTypes.Rating;
    })
    .addCase(sortMenuView, (state) => {
      state.sortView = state.sortView === 'closed' ? 'opened' : 'closed';
    });
});

export {reducer};
