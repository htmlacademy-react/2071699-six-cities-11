import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {NearByOffersData} from '../../types/state';
import {fetchOffersNearby} from '../api-actions';

const initialState: NearByOffersData = {
  nearbyOffers: [],
  isOffersDataLoading: false,
  hasError: false,
};


export const nearbyOffersData = createSlice({
  name: NameSpace.DataOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearby.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersNearby.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});

