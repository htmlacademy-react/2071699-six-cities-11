import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import FavoritesPageOffers from './favorites-page-offers';
import {makeFakeOfferFavorParis} from '../../utils/mocks';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import {OfferType} from '../../types/offers';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
});
const history = createMemoryHistory();

describe('Component: FavoritesPageOffers', () => {
  it('should render correctly', () => {

    const fakeOffers = Array.from({length: 5}, () => makeFakeOfferFavorParis());
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPageOffers
            offersFavorList={fakeOffers}
          />
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByRole('article').length).toBe(fakeOffers.length);

  });

  it('should render empty correctly', () => {

    const fakeOffers: OfferType[] = [];
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPageOffers
            offersFavorList={fakeOffers}
          />
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByRole('article')).not.toBeInTheDocument();

  });

});
