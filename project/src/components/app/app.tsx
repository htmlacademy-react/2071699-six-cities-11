import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyPage from '../../pages/property-page/property-page';
import PrivateRoute from '../private-route/private-route';

interface OfferCard {
  id: number;
	imgSrc: string;
  coast: number;
}

type OffersProps = {
  offersCount: number;
  offersList: OfferCard[];
}

function App({offersCount, offersList}: OffersProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount} offersList={offersList} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<PropertyPage />}
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
