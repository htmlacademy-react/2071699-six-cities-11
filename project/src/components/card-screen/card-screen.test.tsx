import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import CardScreen from './card-screen';
import {makeFakeOffer} from '../../utils/mocks';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';

const mockStore = configureMockStore();
const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: fakeOffers, offers: fakeOffers, isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}
});
const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();

describe('Component: CardScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardScreen
            card={fakeOffer}
            pageType={AppRoute.Main}
          />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();


  });

  it('onChange article on hover', async () => {
    history.push('/fake');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={`${AppRoute.Property}/${fakeOffer.id.toString()}`}
              element={<h1>This is property page</h1>}
            />
            <Route
              path='*'
              element={
                <CardScreen
                  card={fakeOffer}
                  pageType={AppRoute.Main}
                />
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>);


    await userEvent.hover(screen.getByRole('article'));

    expect(screen.queryByText(/This is property page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('link'));

    expect(screen.getByText(/This is property page/i)).toBeInTheDocument();

  });

});
