import {render, screen} from '@testing-library/react';
import OfferNearbyList from './offer-nearby-list';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {makeFakeOfferFavorParis} from '../../utils/mocks';


const fakeOffers = Array.from({length: 5}, () => makeFakeOfferFavorParis());
const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false, selectedCityName: 'Paris'},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
});

describe('Component: OfferNearbyList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferNearbyList
            offersList={fakeOffers}
            pageType={AppRoute.Property}
            cityName={'Paris'}
          />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getAllByRole('article').length).toBe(fakeOffers.length);

  });

});
