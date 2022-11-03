import {useState} from 'react';
import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';
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
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
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


function FavoritesPage({offersFavorList}: OffersListProps): JSX.Element {
  const [cardData, setCardData] = useState({
    cardId: 0,
    isActive: false,
  });


  const citiesList: string[] = [...new Set(offersFavorList.map((el)=> el.city.name))] as string[];
  // eslint-disable-next-line no-console
  console.log(citiesList);

  return (
    <div className="page">
      <HeaderFavoritesPage />
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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;

