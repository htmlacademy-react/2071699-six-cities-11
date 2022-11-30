import HeaderMainPage from '../../components/main-page-header/main-page-header';
import FooterFavoritesPage from '../../components/favorites-page-footer/favorites-page-footer';
import FavoritesPageEmpty from '../../components/favorites-page-empty/favorites-page-empty';
import FavoritesPageOffers from '../../components/favorites-page-offers/favorites-page-offers';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector} from '../../hooks';
import {getOffersFavotiteList} from '../../store/offers-data/selectors';


function FavoritesPage(): JSX.Element {
  useScrollToTop();
  const offersFavorList = useAppSelector(getOffersFavotiteList);
  return (
    <div className="page">
      <HeaderMainPage />
      {offersFavorList.length === 0 ? <FavoritesPageEmpty/> : <FavoritesPageOffers offersFavorList={offersFavorList} />}
      <FooterFavoritesPage />
    </div>);
}
export default FavoritesPage;

