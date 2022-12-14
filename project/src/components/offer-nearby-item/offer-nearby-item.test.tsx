import {render, screen} from '@testing-library/react';
import OfferNearbyItem from './offer-nearby-item';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {makeFakeOffer} from '../../utils/mocks';


const fakeOffer = makeFakeOffer();
const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false, selectedCityName: 'Paris'},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
});

describe('Component: OfferNearbyItem', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferNearbyItem
            offer={fakeOffer}
            pageType={AppRoute.Property}
          />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getByRole('article')).toBeInTheDocument();

  });

});
