import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOffers} from '../../types/state';
import {NameSpace, SortTypes} from '../../constants';

const initialState: SortOffers = {
  sortType: SortTypes.Popular,
  sortView: 'closed',
};


export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    sortOffersType: (state, action: PayloadAction<{currentType: string}>) => {
      state.sortType = action.payload.currentType;
    },
    sortMenuView: (state) => {
      state.sortView = state.sortView === 'closed' ? 'opened' : 'closed';
    },
    resetSort: (state) => {
      state.sortView = 'closed';
      state.sortType = SortTypes.Popular;
    },
  },
});

export const {sortOffersType, sortMenuView, resetSort} = sortProcess.actions;
