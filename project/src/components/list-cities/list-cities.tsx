import {MouseEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {OfferType} from '../../types/offers';

type OffersProps = {
  cityName: string;
  allOffers: OfferType[];
}

function ListCities({cityName, allOffers}: OffersProps): JSX.Element {
  const dispatch = useAppDispatch();
  const listItemHoverHandler = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    const currentCity: string = event.currentTarget.innerText;
    dispatch(changeCity({currentCity}));
  };
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/" onClick={listItemHoverHandler}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}


export default ListCities;
