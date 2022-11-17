import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyPage from '../../pages/property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import {CommentsOffersType} from '../../types/comments';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


type OffersProps = {
  commentsList: CommentsOffersType[];
}

function App({commentsList}: OffersProps): JSX.Element {

  const isOffersDataLoading: boolean = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
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
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<PropertyPage commentsList={commentsList}/>}
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
