import {Route, Routes} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyPage from '../../pages/property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import {getAuthorizationStatus, getAuthCheckedStatus} from '../../store/user-process/selectors';
import {getOffersDataLoadingStatus, getErrorStatus} from '../../store/offers-data/selectors';
import {getFavoritesDataLoadingStatus, getErrorFavoriteStatus} from '../../store/favotites-data/selectors';
import {store} from '../../store';
import {fetchFavorites} from '../../store/api-actions';
import {useEffect} from 'react';
import {toast} from 'react-toastify';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(fetchFavorites());
    }
  }, [authorizationStatus]);

  const onReload = () => {
    dispatch(fetchFavorites());
  };
  const isFavoritesDataLoading = useAppSelector(getFavoritesDataLoadingStatus);
  const hasErrorFavorites = useAppSelector(getErrorFavoriteStatus);
  if (hasErrorFavorites && !isFavoritesDataLoading && authorizationStatus === AuthorizationStatus.Auth) {
    toast.warn('Не удалось загрузить список избранных предложений');
  }


  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen message={'список предложений'} onReload={onReload}/>);
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
            pageType={AppRoute.Login}
          >
            <LoginPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
            pageType={AppRoute.Favorites}
          >
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Property}/:id`}
        element={<PropertyPage/>}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>

  );
}

export default App;
