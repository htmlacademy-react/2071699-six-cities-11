import {useAppDispatch} from '../../hooks';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';

function HeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();

  const authInfo = useAppSelector((state) => state.authInfo);

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="/">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{authInfo?.email}</span>
          <span className="header__favorite-count">3</span>
        </a>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to='/'
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}


export default HeaderAuth;
