import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const Setting = {
  OffersCount: 130,
  OffersList: [{imgSrc: 'img/apartment-03.jpg',coast: 180},
    {imgSrc: 'img/apartment-01.jpg',coast: 120},
    {imgSrc: 'img/room.jpg',coast: 300},
    {imgSrc: 'img/apartment-02.jpg',coast: 500},
    {imgSrc: 'img/room.jpg',coast: 200}
  ]
} as const;


root.render(
  <React.StrictMode>
    <App offersCount = {Setting.OffersCount} offersList={Setting.OffersList} />
  </React.StrictMode>,
);
