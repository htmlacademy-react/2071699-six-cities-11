import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyPage from '../../pages/property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import {OfferType} from '../../types/offers';
import {CommentsOffersType} from '../../types/comments';
import ScrollToTop from '../../hooks/scroll-to-up/scroll-to-up';

type OffersProps = {
  offersList: OfferType[];
  commentsList: CommentsOffersType[];
}

function App({offersList, commentsList}: OffersProps): JSX.Element {
  const offersFavotiteList: OfferType[] = offersList.filter((offer) => offer.isFavorite) ;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersList={offersList} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offersFavorList={offersFavotiteList}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<PropertyPage offersList={offersList} commentsList={commentsList}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
