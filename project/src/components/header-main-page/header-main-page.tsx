import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {resetSort} from '../../store/sort-process/sort-process';
import {AuthorizationStatus, AppRoute, DEFAULT_CITY} from '../../constants';
import HeaderAuth from '../header-auth/header-auth';
import HeaderNoAuth from '../header-noauth/header-noauth';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


function HeaderMainPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const handleMainClick = () => {
    dispatch(changeCity({currentCity: DEFAULT_CITY}));
    dispatch(resetSort());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoute.Main} className="header__logo-link header__logo-link--active"
              onClick={handleMainClick}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth && <HeaderAuth />}
            {authorizationStatus !== AuthorizationStatus.Auth && <HeaderNoAuth />}
          </nav>
        </div>
      </div>
    </header>);
}

export default HeaderMainPage;
