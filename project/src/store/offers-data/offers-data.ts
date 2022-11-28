import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {OffersData} from '../../types/state';
import {OfferType} from '../../types/offers';
import {fetchOffersAction} from '../api-actions';

const initialState: OffersData = {
  allOffers: [],
  isOffersDataLoading: false,

  selectedCityName: 'Paris',
  offers: [],
  offersNotSort: [],
  selectedPoint: null,
  offersFavotiteList: [],
};


export const offersData = createSlice({
  name: NameSpace.DataOffers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{currentCity: string}>) => {
      state.selectedCityName = action.payload.currentCity;
      state.offers = state.allOffers.filter((el) => el.city.name === action.payload.currentCity);
      state.offersNotSort = state.allOffers.filter((el) => el.city.name === action.payload.currentCity);
    },
    getFavoriteOffers: (state) => {
      state.offersFavotiteList = state.allOffers.filter((offer) => offer.isFavorite);
    },
    getCurrentPoint: (state, action: PayloadAction<{offer: OfferType; isAction: boolean}>) => {
      const {offer, isAction} = action.payload;
      state.selectedPoint = isAction ? offer.location : null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.offers = state.allOffers.filter((el) => el.city.name === state.selectedCityName);
        state.offersNotSort = state.allOffers.filter((el) => el.city.name === state.selectedCityName);
        state.isOffersDataLoading = false;
      });
  }
});

export const {changeCity, getFavoriteOffers, getCurrentPoint} = offersData.actions;
