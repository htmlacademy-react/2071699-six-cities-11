import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import CommentForm from './comment-form';
import {makeFakeOffer, makeFakeOfferFavorParis, makeFakeComment} from '../../utils/mocks';
import {AuthorizationStatus} from '../../constants';

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


const fakeOffer = makeFakeOffer();

describe('Component: CommentForm', () => {
  it('should render "CommentForm"', async () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <CommentForm
              hotelId= {fakeOffer.id}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(5);

    await userEvent.type(screen.getByTestId('textarea'), 'textarea');

    expect(screen.getByDisplayValue(/textarea/i)).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('Submit');


    const [rating1,rating2,,,] = screen.getAllByRole('radio');

    await userEvent.click(rating1);
    expect(rating1).toBeChecked();

    await userEvent.click(rating2);
    expect(rating2).toBeChecked();
  });
});
