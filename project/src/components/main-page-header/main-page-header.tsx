import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../constants';
import HeaderAuth from '../../components/header-auth/header-auth';
import HeaderNoAuth from '../../components/header-noauth/header-noauth';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


function HeaderMainPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
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
            {authorizationStatus === AuthorizationStatus.Auth && <HeaderAuth />}
            {authorizationStatus !== AuthorizationStatus.Auth && <HeaderNoAuth />}
          </nav>
        </div>
      </div>
    </header>);
}

export default HeaderMainPage;
