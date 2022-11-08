import {MouseEvent} from 'react';

type CityProps = {
  cityName: string | undefined;
  onListItemHover: (listItemName: string) => void;
};

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


export default ListCities;
