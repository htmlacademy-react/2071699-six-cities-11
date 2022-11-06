import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const Setting = {
  OffersCount: 130,
};


root.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OffersCount}
      offersList = {offers}
      commentsList = {comments}
    />
  </React.StrictMode>,
);
