import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import FavoritesPageFooter from './favorites-page-footer';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({});

describe('Component: FavoritesPageFooter', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPageFooter />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByRole('link')).toBeInTheDocument();
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
              element={<FavoritesPageFooter />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
