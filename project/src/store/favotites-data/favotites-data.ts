import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {FavoritesData} from '../../types/state';
import {fetchFavorites} from '../api-actions';
import {OfferType} from '../../types/offers';

const initialState: FavoritesData = {
  favoritesOffers: [],
  isOffersDataLoading: false,
  hasError: false,
};


export const favoritesOffersData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<{offer: OfferType}>) => {
      state.favoritesOffers = [...state.favoritesOffers].concat([action.payload.offer]);
    },
    removeFavorites: (state, action: PayloadAction<{offer: OfferType}>) => {
      state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== action.payload.offer.id);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});

export const {addFavorites, removeFavorites} = favoritesOffersData.actions;
