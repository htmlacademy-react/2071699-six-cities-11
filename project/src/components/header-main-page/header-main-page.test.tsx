import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import HeaderMainPage from './header-main-page';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import {Provider} from 'react-redux';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}
});

describe('Component: HeaderMainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderMainPage />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('handleMainClick')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/"
              element={<h1>This is main page</h1>}
            />
            <Route
              path='*'
              element={<HeaderMainPage />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('handleMainClick'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
