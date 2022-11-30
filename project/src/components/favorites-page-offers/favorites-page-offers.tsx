import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';
import {AppRoute} from '../../constants';

type OffersListProps = {
  offersFavorList: OfferType[];
}

function FavoritesPageOffers({offersFavorList}: OffersListProps): JSX.Element {

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

export default FavoritesPageOffers;
