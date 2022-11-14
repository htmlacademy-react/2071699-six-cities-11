import {MouseEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import {OfferType} from '../../types/offers';

type OffersProps = {
  cityName: string;
  offersList: OfferType[];
}

function ListCities({cityName, offersList}: OffersProps): JSX.Element {
  const dispatch = useAppDispatch();
  const listItemHoverHandler = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    dispatch(changeCity(event.currentTarget.innerText, offersList));
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
