import {useAppSelector} from '../../hooks';
import {AppRoute} from '../../constants';
import OffersList from '../../components/offers-list/offers-list';
import SortForm from '../../components/sort-types/sort-types';
import Map from '../../components/map/map';
import {getSelectedPoint, getSelectedCityName, getOffers} from '../../store/offers-data/selectors';


function MainPageWithOffers(): JSX.Element {
  const currentCityName = useAppSelector(getSelectedCityName);
  const offersForCity = useAppSelector(getOffers);
  const selectedPoint = useAppSelector(getSelectedPoint);
  const currentCity = offersForCity[0].city;


  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersForCity.length}  places to stay in {currentCityName}</b>
        <SortForm />

        <OffersList
          pageType={AppRoute.Main}
        />
      </section>
      <div className="cities__right-section">

        <Map city={currentCity} offers={offersForCity} selectedPoint={selectedPoint} classNameMap={'cities'} />
      </div>
    </div>

  );
}
export default MainPageWithOffers;
