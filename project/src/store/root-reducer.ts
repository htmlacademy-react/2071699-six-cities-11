import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {commentsData} from './comments-data/comments-data';
import {offersData} from './offers-data/offers-data';
import {sortProcess} from './sort-process/sort-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.DataOffers]: offersData.reducer,
  [NameSpace.DataComments]: commentsData.reducer,
  [NameSpace.Sort]: sortProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
