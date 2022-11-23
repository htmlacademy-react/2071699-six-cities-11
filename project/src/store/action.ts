import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offers';
import {UserData} from '../types/user-data';
import {CommentType} from '../types/comments';
import {AppRoute, AuthorizationStatus} from '../constants';


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

export const getFavoriteOffers = createAction('offers/getFavoriteOffers',
  (value: OfferType []) => ({
    payload: value,
  }));


export const sortOffersPriceLow = createAction('sort/sortOffersPriceLow');
export const sortOffersPriceHigh = createAction('sort/sortOffersPriceHigh');
export const sortOffersPopular = createAction('sort/sortOffersPopular');
export const sortOffersRating = createAction('sort/sortOffersRating');

export const sortMenuView = createAction('sort/sortMenuView');

export const loadOffers = createAction<OfferType[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const loadComments = createAction<CommentType[]>('data/loadComments');
export const sendComment = createAction<CommentType>('data/sendComment');
export const setCommentsLoadingStatus = createAction<boolean>('data/setCommentsLoadingStatus');

export const setError = createAction<string | null>('offer/setError');

export const setStatusAuthorization = createAction<AuthorizationStatus>('user/setStatusAuthorization');
export const loadAuthInfo = createAction<UserData>('user/loadAuthInfo');

export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

