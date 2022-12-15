import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import FavoritesPage from './favorites-page';
import {makeFakeOfferFavorParis} from '../../utils/mocks';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../constants';

const mockStore = configureMockStore();

const fakeOffers = Array.from({length: 5}, () => makeFakeOfferFavorParis());

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: fakeOffers, isOffersDataLoading: false},
});
const history = createMemoryHistory();
jest.mock('../../hooks/use-scroll-to-up/use-scroll-to-up', () => function useScrollToUp() {
  return (
    <div>fake useScrollToUp</div>
  );
});

describe('Component: FavoritesPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPage />
        </HistoryRouter>
      </Provider>);

    expect(screen.getAllByRole('article').length).toBe(fakeOffers.length);

  });

});
