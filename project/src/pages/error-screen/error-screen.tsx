import {useAppDispatch} from '../../hooks';
import {fetchOffersAction, fetchCommentsAction, fetchFavorites} from '../../store/api-actions';
import {AppRoute} from '../../constants';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

type ErrorProps = {
  pageType?: string;
  paramsId? : string;
};

function ErrorScreen({pageType, paramsId}: ErrorProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    switch (pageType) {
      case AppRoute.Main:
        setDescription('Не удалось загрузить список предложений');
        break;
      case AppRoute.Favorites:
        setDescription('Не удалось загрузить избранные');
        break;
      case AppRoute.Property:
        setDescription('Не удалось загрузить комментарии');
        break;
    }}, [pageType]);


  const handleChange = () => {
    switch (pageType) {
      case AppRoute.Property:
        paramsId && dispatch(fetchCommentsAction(paramsId));
        break;
      case AppRoute.Favorites:
        dispatch(fetchFavorites());
        break;
      case AppRoute.Main:
        dispatch(fetchOffersAction());
        break;
      default:
        dispatch(fetchOffersAction());
        break;
    }
  };

  return (
    <>
      <p className="error__text">{description}</p>
      <div>
        <button
          onClick={handleChange}
          className="replay replay--error"
          type="button"
        >
      Попробовать ещё раз
        </button>
      </div>
      <div>
        <button
          onClick={()=> navigate(AppRoute.Main)}
          className="replay replay--error"
          type="button"
        >
      Перейти на главную
        </button>
      </div>
    </>
  );
}

export default ErrorScreen;
