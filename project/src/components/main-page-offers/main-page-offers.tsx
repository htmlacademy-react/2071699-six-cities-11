import {useAppSelector} from '../../hooks';
import {CityType} from '../../types/offers';
import {AppRoute} from '../../constants';
import OffersList from '../../components/offers-list/offers-list';
import SortForm from '../../components/sort-types/sort-types';
import Map from '../../components/map/map';

type OffersPropsAll = {
  offersCount: number;
  selectedCity: CityType;
}

function MainPageWithOffers({offersCount, selectedCity}: OffersPropsAll): JSX.Element {

  const currentCity = useAppSelector((state) => state.selectedCity);
  const offersForCity = useAppSelector((state) => state.offers);
  const selectedPoint = useAppSelector((state) => state.selectedPoint);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount}  places to stay in {currentCity.name}</b>
        <SortForm />

        <OffersList
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
