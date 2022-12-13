import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import HistoryRouter from '../src/components/history-route/history-route';
import browserHistory from './browser-history';
import App from './components/app/app';
import {store} from './store';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App/>
        <ToastContainer />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
