import {render, screen} from '@testing-library/react';
import ListCities from './list-cities';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../constants';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}

});

describe('Component: ListCities', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ListCities
            cityName={'Amsterdam'}
          />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

});
