import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const Setting = {
  OffersCount: 130,
  OffersList: [{id: 1, imgSrc: 'img/apartment-03.jpg',coast: 180},
    {id: 2, imgSrc: 'img/apartment-01.jpg',coast: 120},
    {id: 3, imgSrc: 'img/room.jpg',coast: 300},
    {id: 4, imgSrc: 'img/apartment-02.jpg',coast: 500},
    {id: 5, imgSrc: 'img/room.jpg',coast: 200}
  ]
};


root.render(
  <React.StrictMode>
    <App offersCount = {Setting.OffersCount} offersList={Setting.OffersList} />
  </React.StrictMode>,
);
