import {nearbyOffersData} from './nearby-offers-data';
import {NearByOffersData} from '../../types/state';
import {fetchOffersNearby} from '../api-actions';
import {makeFakeOffer} from '../../utils/mocks';

describe('Reducer: nearbyOffers', () => {
  let state: NearByOffersData;

  beforeEach(() => {
    state = {
      nearbyOffers: [],
      isOffersDataLoading: false,
      hasError: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(nearbyOffersData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({nearbyOffers: [], isOffersDataLoading: false, hasError: false,});
  });

  describe('fetchOffersNearby test', () => {
    it('fetchOffersNearby fulfilled', () => {
      const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
      expect(nearbyOffersData.reducer(state, { type: fetchOffersNearby.fulfilled.type , payload: fakeOffers}))
        .toEqual({nearbyOffers: fakeOffers, isOffersDataLoading: false, hasError: false,});
    });
    it('fetchOffersNearby rejected', () => {
      expect(nearbyOffersData.reducer(state, { type: fetchOffersNearby.rejected.type }))
        .toEqual({nearbyOffers: [], isOffersDataLoading: false, hasError: true,});
    });
  });

});
