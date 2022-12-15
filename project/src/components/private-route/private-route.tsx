import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  pageType?: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children, pageType} = props;

  return (
    (authorizationStatus === AuthorizationStatus.Auth && pageType !== AppRoute.Login) ||
    (authorizationStatus === AuthorizationStatus.NoAuth && pageType === AppRoute.Login)
      ? children
      : <Navigate to={pageType === AppRoute.Login ? AppRoute.Main : AppRoute.Login} />
  );
}

export default PrivateRoute;
