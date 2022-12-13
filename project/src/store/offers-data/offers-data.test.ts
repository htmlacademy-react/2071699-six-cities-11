import {offersData, changeCity, getCurrentPoint} from './offers-data';
import {OffersData} from '../../types/state';
import {fetchOffersAction} from '../api-actions';
import {makeFakeOffer} from '../../utils/mocks';

describe('Reducer: offers', () => {
  let state: OffersData;

  beforeEach(() => {
    state = {
      allOffers: [],
      isOffersDataLoading: false,
      hasError: false,
      selectedCityName: 'Paris',
      offers: [],
      selectedPoint: null,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({allOffers: [],
        isOffersDataLoading: false,
        hasError: false,
        selectedCityName: 'Paris',
        offers: [],
        selectedPoint: null,});
  });

  describe('fetchOffersAction test', () => {
    it('fetchOffersAction fulfilled test', () => {
      const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
      expect(offersData.reducer(state, { type: fetchOffersAction.fulfilled, payload: fakeOffers}))
        .toEqual({allOffers: fakeOffers,
          isOffersDataLoading: false,
          hasError: false,
          selectedCityName: 'Paris',
          offers: fakeOffers.filter((el) => el.city.name === 'Paris'),
          selectedPoint: null,});
    });
    it('fetchOffersAction rejected test', () => {
      expect(offersData.reducer(state, { type: fetchOffersAction.rejected.type }))
        .toEqual({allOffers: [],
          isOffersDataLoading: false,
          hasError: true,
          selectedCityName: 'Paris',
          offers: [],
          selectedPoint: null,});
    });
  });


  describe('changeCity test', () => {
    it('changeCity test', () => {
      const fakeOffers = Array.from({length: 10}, () => makeFakeOffer());
      expect(offersData.reducer({allOffers: fakeOffers,
        isOffersDataLoading: false,
        hasError: false,
        selectedCityName: 'Paris',
        offers: fakeOffers.filter((el) => el.city.name === 'Paris'),
        selectedPoint: null,},
      changeCity({currentCity: 'Amsterdam'})))
        .toEqual({allOffers: fakeOffers,
          isOffersDataLoading: false,
          hasError: false,
          selectedCityName: 'Amsterdam',
          offers: fakeOffers.filter((el) => el.city.name === 'Amsterdam'),
          selectedPoint: null,});
    });
  });


  describe('getCurrentPoint test', () => {
    it('getCurrentPoint true test', () => {
      const fakeOffers = Array.from({length: 10}, () => makeFakeOffer());
      expect(offersData.reducer({allOffers: fakeOffers,
        isOffersDataLoading: false,
        hasError: false,
        selectedCityName: 'Paris',
        offers: [],
        selectedPoint: null,},
      getCurrentPoint({offer: fakeOffers[0], isAction: true})))
        .toEqual({allOffers: fakeOffers,
          isOffersDataLoading: false,
          hasError: false,
          selectedCityName: 'Paris',
          offers: [],
          selectedPoint: fakeOffers[0].location,});
    });

    it('getCurrentPoint false test', () => {
      const fakeOffers = Array.from({length: 10}, () => makeFakeOffer());
      expect(offersData.reducer({allOffers: fakeOffers,
        isOffersDataLoading: false,
        hasError: false,
        selectedCityName: 'Paris',
        offers: [],
        selectedPoint: null,},
      getCurrentPoint({offer: fakeOffers[0], isAction: false})))
        .toEqual({allOffers: fakeOffers,
          isOffersDataLoading: false,
          hasError: false,
          selectedCityName: 'Paris',
          offers: [],
          selectedPoint: null,});
    });
  });

});
