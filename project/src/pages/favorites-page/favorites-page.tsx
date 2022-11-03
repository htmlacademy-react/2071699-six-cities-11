import {useState} from 'react';
import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

type OffersListProps = {
  offersFavorList: OfferType[];
}


function HeaderFavoritesPage(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link" >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="/">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="/">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
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
  const [cardData, setCardData] = useState({
    cardId: 0,
    isActive: false,
  });

  const citiesList: string[] = [...new Set(offersFavorList.map((el)=> el.city.name))] as string[];

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
                        onChangeCard={(id: number, sign: boolean) => setCardData({...cardData, cardId: id, isActive: sign})}
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
function FavoritesPage({offersFavorList}: OffersListProps): JSX.Element {
  return (
    <div className="page">
      <HeaderFavoritesPage />
      {offersFavorList.length === 0 ? <FavoritesPageEmpty/> : <FavoritesPageOffer offersFavorList={offersFavorList} />}
      <FooterFavoritesPage />
    </div>);
}
export default FavoritesPage;

