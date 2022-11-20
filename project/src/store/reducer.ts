import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  getCurrentPoint,
  getFavoriteOffers,
  sortOffersPriceLow,
  sortOffersPriceHigh,
  sortOffersPopular,
  sortOffersRating,
  sortMenuView,
  loadOffers,
  setOffersDataLoadingStatus,
  setError,
  requireAuthorization,
  loadAuthInfo,
} from './action';
import _ from 'lodash';
import {OfferType, LocationType} from '../types/offers';
import {UserData} from '../types/user-data';
import {SortTypes, AuthorizationStatus} from '../constants';


const initialState : {
  selectedCityName: string;
  offers: OfferType[];
  selectedPoint: LocationType | null;
  sortType: string;
  sortView: string;
  offersNotSort: OfferType[];
  offersFavotiteList: OfferType[];
  allOffers: OfferType[];
  error: string | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  authInfo: UserData | null;
} = {
  selectedCityName: 'Paris',
  offers: [],
  selectedPoint: null,
  sortType: SortTypes.Popular,
  sortView: 'closed',
  offersNotSort: [],
  offersFavotiteList: [],
  allOffers: [],
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCityName = action.payload.city;
      state.offers = action.payload.offersForCity;
      state.offersNotSort = action.payload.offersForCity;
      state.sortType = SortTypes.Popular;
      state.sortView = 'closed';
    })

    .addCase(getCurrentPoint, (state, action) => {
      state.selectedPoint = action.payload || null;
    })
    .addCase(getFavoriteOffers, (state, action) => {
      state.offersFavotiteList = action.payload.filter((offer) => offer.isFavorite);
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
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.offers = action.payload.filter((el) => el.city.name === initialState.selectedCityName);
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadAuthInfo, (state, action) => {
      state.authInfo = action.payload;
    });
});

export {reducer};
