import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {OfferType} from '../../types/offers';

export const getNearbyOffers = (state: State): OfferType[] => state[NameSpace.DataNearby].nearbyOffers;
