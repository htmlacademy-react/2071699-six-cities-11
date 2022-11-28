import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOffers} from '../../types/state';
import {OfferType} from '../../types/offers';
import {NameSpace, SortTypes} from '../../constants';
import _ from 'lodash';

const initialState: SortOffers = {
  offers: [],
  sortType: SortTypes.Popular,
  sortView: 'closed',
};


export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    sortOffersPriceLow: (state) => {
      state.offers = _.sortBy(state.offers, 'price').reverse();
      state.sortType = SortTypes.PriceLow;
    },
    sortOffersPriceHigh:  (state) => {
      state.offers = _.sortBy(state.offers, 'price');
      state.sortType = SortTypes.PriceHigh;
    },
    sortOffersPopular: (state, action: PayloadAction<{offersNotSort: OfferType[]}>) => {
      state.offers = action.payload.offersNotSort;
      state.sortType = SortTypes.Popular;
    },
    sortOffersRating: (state) => {
      state.offers = _.sortBy(state.offers, 'rating');
      state.sortType = SortTypes.Rating;
    },
    sortMenuView: (state) => {
      state.sortView = state.sortView === 'closed' ? 'opened' : 'closed';
    },
  },
});

export const {sortOffersPriceLow, sortOffersPriceHigh, sortOffersPopular, sortOffersRating, sortMenuView} = sortProcess.actions;
