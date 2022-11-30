import HeaderMainPage from '../../components/main-page-header/main-page-header';
import FooterFavoritesPage from '../../components/favorites-page-footer/favorites-page-footer';
import FavoritesPageEmpty from '../../components/favorites-page-empty/favorites-page-empty';
import FavoritesPageOffers from '../../components/favorites-page-offers/favorites-page-offers';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {fetchFavorites} from '../../store/api-actions';
import {useEffect} from 'react';
import {getFavorites, getOffersDataLoadingStatus, getErrorStatus} from '../../store/favotites-data/selectors';
import {AppRoute} from '../../constants';

function FavoritesPage(): JSX.Element {
  useScrollToTop();

  useEffect(() => {
    store.dispatch(fetchFavorites());
  }, []);
  const offersFavorList = useAppSelector(getFavorites);

  const isFavoritesDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasErrorFavorites = useAppSelector(getErrorStatus);

  if (isFavoritesDataLoading) {
    return (<LoadingScreen />);
  }
  if (hasErrorFavorites) {
    return (<ErrorScreen pageType={AppRoute.Favorites}/>);
  }
  return (
    <div className="page">
      <HeaderMainPage />
      {offersFavorList.length === 0 ? <FavoritesPageEmpty/> : <FavoritesPageOffers offersFavorList={offersFavorList} />}
      <FooterFavoritesPage />
    </div>);
}
export default FavoritesPage;

