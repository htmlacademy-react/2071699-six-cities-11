import {render, screen} from '@testing-library/react';
import PropertyPage from './property-page';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeOffer} from '../../utils/mocks';
import {AuthorizationStatus} from '../../constants';

const history = createMemoryHistory();
const mockStore = configureMockStore();


const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
const nearOffers = fakeOffers.slice(3);

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: fakeOffers, offers: fakeOffers, isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: nearOffers,},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}
});
jest.mock('../../hooks/use-scroll-to-up/use-scroll-to-up', () => function useScrollToUp() {
  return (
    <div>fake useScrollToUp</div>
  );
});

describe('Component: PropertyPage', () => {


  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyPage />
        </HistoryRouter>,
      </Provider>
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });


});
