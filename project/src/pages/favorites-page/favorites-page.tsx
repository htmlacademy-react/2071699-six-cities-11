import CardScreen from '../../components/card/card';
import HeaderMainPage from '../../components/main-page-header/main-page-header';
import {OfferType} from '../../types/offers';
import {AppRoute} from '../../constants';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector} from '../../hooks';

type OffersListProps = {
  offersFavorList: OfferType[];
}

function FooterFavoritesPage(): JSX.Element {
  return (
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  );}

function FavoritesPageEmpty(): JSX.Element {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );}

function FavoritesPageOffer({offersFavorList}: OffersListProps): JSX.Element {

  const citiesList: string[] = [...new Set(offersFavorList.map((el)=> el.city.name))];

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {citiesList.map((city) => (
              <li key={city} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offersFavorList.filter((offer) => offer.city.name === city)
                    .map((offer) => (
                      <CardScreen
                        key={offer.id}
                        card={offer}
                        pageType={AppRoute.Favorites}
                      />))}
                </div>
              </li>
            )
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}
function FavoritesPage(): JSX.Element {
  useScrollToTop();
  const offersFavorList = useAppSelector((state) => state.offersFavotiteList);
  return (
    <div className="page">
      <HeaderMainPage />
      {offersFavorList.length === 0 ? <FavoritesPageEmpty/> : <FavoritesPageOffer offersFavorList={offersFavorList} />}
      <FooterFavoritesPage />
    </div>);
}
export default FavoritesPage;

