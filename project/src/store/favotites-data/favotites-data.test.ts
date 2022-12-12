import {favoritesData, addFavorites, removeFavorites} from './favotites-data';
import {FavoritesData} from '../../types/state';
import {fetchFavorites} from '../api-actions';
import {makeFakeOffer} from '../../utils/mocks';

describe('Reducer: favorites', () => {
  let state: FavoritesData;

  beforeEach(() => {
    state = {
      favoritesOffers: [],
      isOffersDataLoading: false,
      hasError: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(favoritesData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({favoritesOffers: [], isOffersDataLoading: false, hasError: false,});
  });

  describe('fetchFavorites test', () => {
    it('fetchFavorites fulfilled', () => {
      const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
      expect(favoritesData.reducer(state, { type: fetchFavorites.fulfilled.type , payload: fakeOffers}))
        .toEqual({favoritesOffers: fakeOffers, isOffersDataLoading: false, hasError: false,});
    });
    it('fetchFavorites rejected', () => {
      expect(favoritesData.reducer(state, { type: fetchFavorites.rejected.type }))
        .toEqual({favoritesOffers: [], isOffersDataLoading: false, hasError: true,});
    });
  });

  describe('addFavorites test', () => {
    it('addFavorites test', () => {
      const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
      const fakeOfferNew = makeFakeOffer();
      const fakeOffersAll = fakeOffers.concat([fakeOfferNew]);
      expect(favoritesData.reducer({favoritesOffers: fakeOffers, isOffersDataLoading: false, hasError: false,},
        addFavorites({offer: fakeOfferNew})))
        .toEqual({favoritesOffers: fakeOffersAll, isOffersDataLoading: false, hasError: false,});
    });
  });

  describe('removeFavorites test', () => {
    it('removeFavorites test', () => {
      const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
      const fakeOfferDel = fakeOffers[4];
      const fakeOffersUpd = fakeOffers.filter((offer) => offer.id !== fakeOfferDel.id);
      expect(favoritesData.reducer({favoritesOffers: fakeOffers, isOffersDataLoading: false, hasError: false,},
        removeFavorites({offer: fakeOfferDel})))
        .toEqual({favoritesOffers: fakeOffersUpd, isOffersDataLoading: false, hasError: false,});
    });
  });

});
