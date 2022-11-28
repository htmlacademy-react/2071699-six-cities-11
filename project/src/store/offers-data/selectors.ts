import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {OfferType, LocationType} from '../../types/offers';

export const getAllOffers = (state: State): OfferType[] => state[NameSpace.DataOffers].allOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.DataOffers].isOffersDataLoading;


export const getSelectedCityName = (state: State): string => state[NameSpace.DataOffers].selectedCityName;
export const getOffers = (state: State): OfferType[] => state[NameSpace.DataOffers].offers;
export const getOffersNotSort = (state: State): OfferType[] => state[NameSpace.DataOffers].offersNotSort;
export const getSelectedPoint = (state: State): LocationType | null => state[NameSpace.DataOffers].selectedPoint;
export const getOffersFavotiteList = (state: State): OfferType[] => state[NameSpace.DataOffers].offersFavotiteList;
