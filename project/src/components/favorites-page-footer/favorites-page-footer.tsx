import {Link} from 'react-router-dom';
import {AppRoute, DEFAULT_CITY} from '../../constants';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {resetSort} from '../../store/sort-process/sort-process';

function FavoritesPageFooter(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleMainClick = () => {
    dispatch(changeCity({currentCity: DEFAULT_CITY}));
    dispatch(resetSort());
  };
  return (
    <footer className="footer container">
      <Link
        to={AppRoute.Main}
        className="footer__logo-link"
        onClick={handleMainClick}
      >
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );}

export default FavoritesPageFooter;
