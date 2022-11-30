import {Fragment} from 'react';
import {useAppDispatch} from '../../hooks';
import {fetchOffersAction, fetchCommentsAction} from '../../store/api-actions';
import {AppRoute} from '../../constants';

type ErrorProps = {
  pageType?: string;
  paramsId? : string;
};

function ErrorScreen({pageType, paramsId}: ErrorProps): JSX.Element {
  const dispatch = useAppDispatch();


  return (
    pageType === AppRoute.Property && paramsId
      ?
      <Fragment>
        <p className="error__text">Не удалось загрузить комментарии</p>
        <button
          onClick={() => {
            dispatch(fetchCommentsAction(paramsId));
          }}
          className="replay replay--error"
          type="button"
        >
      Попробовать ещё раз
        </button>
      </Fragment>
      :
      <Fragment>
        <p className="error__text">Не удалось загрузить список предложений</p>
        <button
          onClick={() => {
            dispatch(fetchOffersAction());
          }}
          className="replay replay--error"
          type="button"
        >
        Попробовать ещё раз
        </button>
      </Fragment>
  );
}

export default ErrorScreen;
