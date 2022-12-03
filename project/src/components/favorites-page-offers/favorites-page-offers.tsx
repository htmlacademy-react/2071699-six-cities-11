import {Link} from 'react-router-dom';
import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';
import {AppRoute} from '../../constants';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {resetSort} from '../../store/sort-process/sort-process';

type OffersListProps = {
  offersFavorList: OfferType[];
}


function FavoritesPageOffers({offersFavorList}: OffersListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const citiesList: string[] = [...new Set(offersFavorList.map((el)=> el.city.name))];

  const handleItemClick = (currentCity: string) => {
    dispatch(changeCity({currentCity}));
    dispatch(resetSort());
  };

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
                    <Link
                      className="locations__item-link"
                      to={AppRoute.Main}
                      onClick={()=>handleItemClick(city)}
                    >
                      <span>{city}</span>
                    </Link>
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
