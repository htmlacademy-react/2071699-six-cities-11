import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import MainPage from './main-page';
import {makeFakeOfferFavorParis} from '../../utils/mocks';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus, SortTypes} from '../../constants';

const mockStore = configureMockStore();

const fakeOffers = Array.from({length: 5}, () => makeFakeOfferFavorParis());

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: fakeOffers, offers: fakeOffers, isOffersDataLoading: false, selectedCityName: 'Paris'},
  FAVORITES: {favoritesOffers: fakeOffers, isOffersDataLoading: false},
  SORT: {sortType: SortTypes.Popular, sortView: 'closed',}
});
const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBe(fakeOffers.length);
  });

});
