import {useState} from 'react';
import {CityType, OfferType} from '../../types/offers';
import {CITIES, DEFAULT_CITY} from '../../constants';
import HeaderMainPage from '../../components/main-page-header/main-page-header';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import MainPageWithOffers from '../../components/main-page-offers/main-page-offers';
import ListCities from '../../components/list-cities/list-cities';

type OffersProps = {
  offersList: OfferType[];
}

function MainPage({offersList}: OffersProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<CityType>(DEFAULT_CITY);

  const onListItemHover = (cityName: string) => {
    const offersForCurrentCity = offersList.filter((offer) => offer.city.name === cityName);
    const currentCity = offersForCurrentCity.length !== 0
      ? offersForCurrentCity[0].city //т.к. во всех предложениях по конкретному городу инфа city одинаковая, то берем первый элемент
      : {
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 10
        },
        name: cityName
      }; //Если для выбранного города нет предложений то в переменную записываем город с нулевыми координатами, т.к. в массиве данных города нет
    setSelectedCity(currentCity);
  };
  const offersForCurrentCity = offersList.filter((offer) => offer.city.name === selectedCity.name).length;
  return (
    <div className="page page--gray page--main">
      <HeaderMainPage/>
      <main className={`page__main page__main--index ${offersForCurrentCity === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (<ListCities key={city} cityName={city} onListItemHover={onListItemHover}/>))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {offersForCurrentCity !== 0
            ?
            <MainPageWithOffers
              offersCount={offersForCurrentCity}
              offersList={offersList}
              selectedCity={selectedCity}
            />
            : <MainPageEmpty /> }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
