import {Link} from 'react-router-dom';
import {useRef, FormEvent} from 'react';
import {toast} from 'react-toastify';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {changeCity} from '../../store/offers-data/offers-data';
import {resetSort} from '../../store/sort-process/sort-process';
import {getHasErrorLogin} from '../../store/user-process/selectors';
import {AppRoute, CITIES} from '../../constants';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const isErrorLogin = useAppSelector(getHasErrorLogin);

  if (isErrorLogin) {
    toast.warn('Сервер не доступен. Попробуйте зайти позднее');
  }
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };
  const handleItemClick = (currentCity: string) => {
    dispatch(changeCity({currentCity}));
    dispatch(resetSort());
  };


  const randomIndex = Math.floor(Math.random() * CITIES.length);

  const city = CITIES[randomIndex];// Выведем, например: JavaScript

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email"
                  id="name" placeholder="Email" required ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  pattern="^(?=.*\d)(?=.*[a-zA-Z]).*$"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={()=>handleItemClick(city)}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
