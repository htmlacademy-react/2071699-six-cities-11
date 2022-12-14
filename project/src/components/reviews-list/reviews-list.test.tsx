import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewsList from './reviews-list';
import { makeFakeComment} from '../../utils/mocks';
import {AuthorizationStatus, COUNT_COMMENTS_VIEW} from '../../constants';

const mockStore = configureMockStore();
const fakeComments = Array.from({length: 5}, () => makeFakeComment());

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: fakeComments, isCommentsLoading: false,}
});


describe('Component: ReviewsList', () => {
  it('should render "ReviewsList"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewsList />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );


    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(Math.min(fakeComments.length, COUNT_COMMENTS_VIEW));

  });
});
