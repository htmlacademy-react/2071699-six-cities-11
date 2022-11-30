import {store} from '../store/index';
import {AuthorizationStatus} from '../constants';
import {OfferType, LocationType} from './offers';
import {CommentType} from '../types/comments';
import {UserData} from '../types/user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authInfo: UserData | null;
};

export type OffersData = {
  allOffers: OfferType[];
  isOffersDataLoading: boolean;
  hasError: boolean;
  selectedCityName: string;
  offers: OfferType[];
  selectedPoint: LocationType | null;
};

export type CommentsData = {
  comments: CommentType[];
  isCommentsLoading: boolean;
  hasErrorComments: boolean;
};

export type SortOffers = {
  sortType: string;
  sortView: string;
};


export type NearByOffersData = {
  nearbyOffers: OfferType[];
  isOffersDataLoading: boolean;
  hasError: boolean;
}

export type FavoritesData = {
  favoritesOffers: OfferType[];
  isOffersDataLoading: boolean;
  hasError: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
