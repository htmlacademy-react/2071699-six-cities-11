import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {comments} from './mocks/comments';
import {store} from './store';
import {fetchOffersAction} from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        commentsList = {comments}
      />
    </Provider>
  </React.StrictMode>,
);
