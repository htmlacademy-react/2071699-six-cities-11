import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offers';

export const changeCity = createAction('city/changeCity',
  (value: string, offersArray: OfferType[]) => {
    const offers = offersArray.filter((el) => el.city.name === value);
    return {payload: {city: offers[0] ? offers[0].city
      : { //Это временно!!!
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 10
        },
        name: value
      }, //Если для выбранного города нет предложений то в переменную записываем город с нулевыми координатами, т.к. в массиве данных города нет,
    offersForCity: offers
    }};}
);

export const getCurrentPoint = createAction('point/getCurrentPoint',
  (value: OfferType, isAction = false) => ({
    payload: isAction ? value?.location : undefined,
  }));
