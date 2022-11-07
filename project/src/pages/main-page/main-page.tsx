import OffersList from '../../components/offers-list/offers-list';
import {OfferType, CityType, LocationType} from '../../types/offers';
import {AppRoute, CITIES, DEFAULT_CITY} from '../../constants';
import Map from '../../components/map/map';
import {useState, MouseEvent} from 'react';
import MainPageEmpty from './main-page-empty';

type OffersProps = {
  offersList: OfferType[];
}
type OffersPropsAll = {
  offersCount: number;
  offersList: OfferType[];
  selectedCity: CityType;
}
type CityProps = {
  cityName: string | undefined;
  onListItemHover: (listItemName: string) => void;
};
function HeaderMainPage(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
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
    </header>);
}


function ListCities({cityName, onListItemHover}: CityProps): JSX.Element {
  const listItemHoverHandler = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/" onClick={listItemHoverHandler}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}


function getPointsForCity (cityName: string, offersList: OfferType[]): LocationType[] {
  const offersForCity: OfferType[] = offersList.filter((offer) => offer.city.name === cityName);
  return offersForCity.map((el)=> el.location);
}


function MainPageWithOffers({offersCount, offersList, selectedCity}: OffersPropsAll): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<LocationType | undefined>(
    undefined
  );
  const onListCardHover = (id: number) => {
    const currentPoint = offersList.find((offer) => offer.id === id)?.location;
    setSelectedPoint(currentPoint);
  };
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount}  places to stay in Amsterdam</b>
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
          offersList={offersList}
          pageType={AppRoute.Main}
          onListCardHover={onListCardHover}
          cityName={selectedCity.name}
        />
      </section>
      <div className="cities__right-section">

        <Map city={selectedCity} points={getPointsForCity(selectedCity.name, offersList)} selectedPoint={selectedPoint}/>
      </div>
    </div>

  );
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
      <main className="page__main page__main--index">
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
