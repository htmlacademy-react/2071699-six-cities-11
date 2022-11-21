import {useAppSelector} from '../../hooks';
import {CITIES} from '../../constants';
import HeaderMainPage from '../../components/main-page-header/main-page-header';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import MainPageWithOffers from '../../components/main-page-offers/main-page-offers';
import ListCities from '../../components/list-cities/list-cities';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {OfferType} from '../../types/offers';


function MainPage(): JSX.Element {
  useScrollToTop();
  const selectedCityName = useAppSelector((state) => state.selectedCityName);
  const offersList: OfferType[] = useAppSelector((state) => state.allOffers);


  const offersForCurrentCity = offersList.filter((offer) => offer.city.name === selectedCityName);
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
            <MainPageWithOffers/>
            : <MainPageEmpty /> }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
