import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offers';

export const changeCity = createAction('city/changeCity',
  (value: string, offersArray: OfferType[]) => {
    const offers = offersArray.filter((el) => el.city.name === value);
    return {payload:
      {
        city: value,
        offersForCity: offers
      }
    };
  }
);

export const getCurrentPoint = createAction('point/getCurrentPoint',
  (value: OfferType, isAction = false) => ({
    payload: isAction ? value?.location : null,
  }));
