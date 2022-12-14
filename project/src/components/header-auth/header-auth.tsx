import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute} from '../../constants';
import {logoutAction} from '../../store/api-actions';

import {getAuthInfo} from '../../store/user-process/selectors';
import {getFavorites} from '../../store/favotites-data/selectors';

function HeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();

  const authInfo = useAppSelector(getAuthInfo);
  const offersFavorList = useAppSelector(getFavorites);

  const handleLoginClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" data-testid="favorites">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{authInfo?.email}</span>
          <span className="header__favorite-count">{offersFavorList.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          to={AppRoute.Main}
          className="header__nav-link"
          onClick={handleLoginClick}
          data-testid="handleLoginClick"
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}


export default HeaderAuth;
