import {render, screen} from '@testing-library/react';
import OffersList from './offers-list';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppRoute, AuthorizationStatus, SortTypes} from '../../constants';
import {makeFakeOfferFavorParis} from '../../utils/mocks';


const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOffers = Array.from({length: 5}, () => makeFakeOfferFavorParis());

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: fakeOffers, offers: fakeOffers, isOffersDataLoading: false, selectedCityName: 'Paris'},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,},
  SORT: {sortType: SortTypes.Popular, sortView: 'closed',}
});

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OffersList
            pageType={AppRoute.Property}
          />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getAllByRole('article').length).toBe(fakeOffers.length);

  });

});
