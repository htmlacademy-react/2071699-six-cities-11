import {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {resetSort} from '../../store/sort-process/sort-process';
import {getSelectedCityName} from '../../store/offers-data/selectors';

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
  const selectedCityName = useAppSelector(getSelectedCityName);
  const classActive = selectedCityName === cityName ? 'tabs__item--active' : '';
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${classActive}`}
        href="/"
        onClick={listItemHoverHandler}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}


export default ListCities;
