import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {AuthorizationStatus, AppRoute} from '../../constants';
import App from './app';
import {makeFakeOffer, makeFakeOfferFavorParis, makeFakeComment} from '../../utils/mocks';

const mockStore = configureMockStore();
const fakeOffersFavorite = Array.from({length: 2}, () => makeFakeOfferFavorParis());
const fakeComments = Array.from({length: 5}, () => makeFakeComment());
const fakeOffers = Array.from({length: 5}, () => makeFakeOffer()).concat(fakeOffersFavorite);

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: fakeOffers, offers: fakeOffersFavorite, isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: fakeOffersFavorite, isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: fakeOffers.slice(3),},
  DATA_COMMENTS: {comments: fakeComments, isCommentsLoading: false,}
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "WelcomeScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it(`should render "Property" when user navigate to ${AppRoute.Property}/${fakeOffersFavorite[0].id}`, () => {
    history.push(`${AppRoute.Property}/${fakeOffersFavorite[0].id}`);

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
