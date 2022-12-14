import HeaderMainPage from '../../components/header-main-page/header-main-page';
import FavoritesPageFooter from '../../components/favorites-page-footer/favorites-page-footer';
import FavoritesPageEmpty from '../../components/favorites-page-empty/favorites-page-empty';
import FavoritesPageOffers from '../../components/favorites-page-offers/favorites-page-offers';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import useScrollToUp from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {getFavorites, getFavoritesDataLoadingStatus, getErrorFavoriteStatus} from '../../store/favotites-data/selectors';
import {fetchFavorites} from '../../store/api-actions';

function FavoritesPage(): JSX.Element {
  useScrollToUp();
  const dispatch = useAppDispatch();

  const onReload = () => {
    dispatch(fetchFavorites());
  };
  const offersFavorList = useAppSelector(getFavorites);

  const isFavoritesDataLoading = useAppSelector(getFavoritesDataLoadingStatus);
  const hasErrorFavorites = useAppSelector(getErrorFavoriteStatus);

  if (isFavoritesDataLoading) {
    return (<LoadingScreen />);
  }
  if (hasErrorFavorites && !isFavoritesDataLoading) {
    return (<ErrorScreen message={'список избранных предложений'} onReload={onReload}/>);
  }


  return (
    <div className="page">
      <HeaderMainPage />
      {offersFavorList.length === 0 ? <FavoritesPageEmpty/> : <FavoritesPageOffers offersFavorList={offersFavorList} />}
      <FavoritesPageFooter />
    </div>);
}
export default FavoritesPage;


