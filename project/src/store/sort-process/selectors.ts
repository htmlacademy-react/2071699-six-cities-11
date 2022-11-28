import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {OfferType} from '../../types/offers';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Sort].offers;
export const getSortType = (state: State): string => state[NameSpace.Sort].sortType;
export const getSortView = (state: State): string => state[NameSpace.Sort].sortView;
