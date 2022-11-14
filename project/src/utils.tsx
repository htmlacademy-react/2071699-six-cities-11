import {OfferType} from './types/offers';

export const sortPriceHigh = (offer1 : OfferType, offer2 : OfferType) => {
  const diffPrice = offer1.price - offer2.price;
  return diffPrice;
};


export const sortPriceLow = (offer1 : OfferType, offer2 : OfferType) => {
  const diffPrice = offer2.price - offer1.price;
  return diffPrice;
};

export const sortRating = (offer1 : OfferType, offer2 : OfferType) => {
  const diffPrice = offer2.rating - offer1.rating;
  return diffPrice;
};

