import {useAppSelector} from '../../hooks';
import {OfferType} from '../../types/offers';
import {CITIES} from '../../constants';
import HeaderMainPage from '../../components/main-page-header/main-page-header';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import MainPageWithOffers from '../../components/main-page-offers/main-page-offers';
import ListCities from '../../components/list-cities/list-cities';
import UseScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';

type OffersProps = {
  offersList: OfferType[];
}

function MainPage({offersList}: OffersProps): JSX.Element {
  UseScrollToTop();
  const selectedCity = useAppSelector((state) => state.selectedCity);

  const offersForCurrentCity = offersList.filter((offer) => offer.city.name === selectedCity.name);
  const offersCountForCity = offersForCurrentCity ? offersForCurrentCity.length : 0 ;
  return (
    <div className="page page--gray page--main">
      <HeaderMainPage/>
      <main className={`page__main page__main--index ${offersCountForCity === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (<ListCities key={city} cityName={city} offersList={offersList} />))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {offersCountForCity !== 0
            ?
            <MainPageWithOffers
              offersCount={offersCountForCity}
              selectedCity={selectedCity}
            />
            : <MainPageEmpty /> }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
