import {render, screen} from '@testing-library/react';
import HeaderNoAuth from './header-noauth';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({});

describe('Component: HeaderNoAuth', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HeaderNoAuth />
      </HistoryRouter>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/login"
              element={<h1>This is login page</h1>}
            />
            <Route
              path='*'
              element={<HeaderNoAuth />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByText(/This is login page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('login'));

    expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
  });
});
