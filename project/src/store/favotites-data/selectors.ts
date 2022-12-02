import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {OfferType} from '../../types/offers';

export const getFavorites = (state: State): OfferType[] => state[NameSpace.Favorites].favoritesOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].isOffersDataLoading;
export const getErrorFavoriteStatus = (state: State): boolean => state[NameSpace.Favorites].hasError;
