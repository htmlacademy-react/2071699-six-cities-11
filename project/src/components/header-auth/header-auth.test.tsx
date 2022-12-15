import {render, screen} from '@testing-library/react';
import HeaderAuth from './header-auth';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import {AppRoute, AuthorizationStatus} from '../../constants';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}

});

describe('Component: HeaderAuth', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderAuth />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });


  it('should redirect to root url when user clicked to link favorites', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Favorites}
              element={<h1>This is favorites page</h1>}
            />
            <Route
              path='*'
              element={<HeaderAuth />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByText(/This is favorites page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('favorites'));

    expect(screen.getByText(/This is favorites page/i)).toBeInTheDocument();
  });
});
