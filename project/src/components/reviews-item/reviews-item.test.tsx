import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewsItem from './reviews-item';
import { makeFakeComment} from '../../utils/mocks';
import {AuthorizationStatus} from '../../constants';

const mockStore = configureMockStore();
const fakeComment = makeFakeComment();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA_OFFERS: {allOffers: [], offers: [], isOffersDataLoading: false},
  FAVORITES: {favoritesOffers: [], isOffersDataLoading: false},
  DATA_NEAR: {nearbyOffers: [],},
  DATA_COMMENTS: {comments: [], isCommentsLoading: false,}
});


describe('Component: ReviewsItem', () => {
  it('should render "ReviewsItem"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewsItem
              comment= {fakeComment}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(fakeComment.comment)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();

  });
});
