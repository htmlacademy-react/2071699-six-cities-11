import {useAppSelector} from '../../hooks';
import {OfferType, CityType} from '../../types/offers';
import {AppRoute} from '../../constants';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';

type OffersPropsAll = {
  offersCount: number;
  offersList: OfferType[];
  selectedCity: CityType;
}

function MainPageWithOffers({offersCount, offersList, selectedCity}: OffersPropsAll): JSX.Element {

  const currentCity = useAppSelector((state) => state.selectedCity);
  const offersForCity = useAppSelector((state) => state.offers);
  const selectedPoint = useAppSelector((state) => state.selectedPoint);


  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount}  places to stay in {currentCity.name}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>

        <OffersList
          offersList={offersForCity}
          pageType={AppRoute.Main}
        />
      </section>
      <div className="cities__right-section">

        <Map city={selectedCity} offers={offersForCity} selectedPoint={selectedPoint} classNameMap={'cities'}/>
      </div>
    </div>

  );
}
export default MainPageWithOffers;
