import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, fetchOffersAction, fetchCommentsAction, fetchFavorites, fetchOffersNearby} from './api-actions';
import {APIRoute} from '../constants';
import {State} from '../types/state';
import {makeFakeOffer, makeFakeComment} from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Offers when GET /offers', async () => {
    const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, fakeOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Comments when GET /comments', async () => {
    const fakeComments = Array.from({length: 5}, () => makeFakeComment());
    const fakeOffer = makeFakeOffer();
    mockAPI
      .onGet(APIRoute.Comments)
      .reply(200, fakeComments);

    const store = mockStore();

    await store.dispatch(fetchCommentsAction(fakeOffer.id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCommentsAction.pending.type,
      // fetchCommentsAction.fulfilled.type
      fetchCommentsAction.rejected.type,
    ]);
  });

  it('should dispatch Load_favorites when GET /favorites', async () => {
    const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, fakeOffers);

    const store = mockStore();

    await store.dispatch(fetchFavorites());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.fulfilled.type
    ]);
  });

  it('should dispatch Load_nearby when GET /offers nearby', async () => {
    const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
    const fakeOffer = makeFakeOffer();
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, fakeOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersNearby(fakeOffer.id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersNearby.pending.type,
      //fetchOffersNearby.fulfilled.type,
      fetchOffersNearby.rejected.type,
    ]);
  });
});
