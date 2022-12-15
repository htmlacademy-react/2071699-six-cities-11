import {render, screen} from '@testing-library/react';
import RoomPage from './room-page';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeOffer} from '../../utils/mocks';
import {AuthorizationStatus} from '../../constants';


const history = createMemoryHistory();
const mockStore = configureMockStore();


const fakeOffer = makeFakeOffer();
const fakeOffers = Array.from({length: 5}, () => makeFakeOffer());
const nearOffers = fakeOffers.slice(3);

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: nearOffers,},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}
});
describe('Component: RoomPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <RoomPage
            offer={fakeOffer}
            nearbyOffers={nearOffers}
          />
        </HistoryRouter>,
      </Provider>
    );

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });


});
