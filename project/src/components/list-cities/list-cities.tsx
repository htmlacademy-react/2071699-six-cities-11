import {MouseEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {resetSort} from '../../store/sort-process/sort-process';

type OffersProps = {
  cityName: string;
}

function ListCities({cityName}: OffersProps): JSX.Element {
  const dispatch = useAppDispatch();
  const listItemHoverHandler = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    const currentCity: string = event.currentTarget.innerText;
    dispatch(changeCity({currentCity}));
    dispatch(resetSort());
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
