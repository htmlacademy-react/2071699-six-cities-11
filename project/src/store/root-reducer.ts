import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {commentsData} from './comments-data/comments-data';
import {offersData} from './offers-data/offers-data';
import {sortProcess} from './sort-process/sort-process';
import {userProcess} from './user-process/user-process';
import {nearbyOffersData} from './nearby-offers-data/nearby-offers-data';
import {favoritesData} from './favotites-data/favotites-data';

export const rootReducer = combineReducers({
  [NameSpace.DataOffers]: offersData.reducer,
  [NameSpace.DataComments]: commentsData.reducer,
  [NameSpace.Sort]: sortProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.DataNearby]: nearbyOffersData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
});
