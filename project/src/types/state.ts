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
  offersNotSort: OfferType[];
  selectedPoint: LocationType | null;
  offersFavotiteList: OfferType[];
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
export type OffersForCity = {
  selectedCityName: string;
  offers: OfferType[];
  offersNotSort: OfferType[];
  selectedPoint: LocationType | null;
  offersFavotiteList: OfferType[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
