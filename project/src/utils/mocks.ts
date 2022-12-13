import {lorem, datatype, name, internet} from 'faker';
import {UserData} from '../types/user-data';
import {OfferType} from '../types/offers';
import {CommentType} from '../types/comments';
import {CITIES} from '../constants';

export const makeFakeUser = (): UserData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.title(),

} as UserData);


const randomIndex = Math.floor(Math.random() * CITIES.length);
const cityName = CITIES[randomIndex];

export const makeFakeOffer = (): OfferType => ({
  bedrooms:  datatype.number(),
  city: {
    location: {
      latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
      longitude: datatype.float({ min: 4, max: 10, precision: 0.001 }),
      zoom: 10
    },
    name: cityName,
  },
  description: lorem.words(10),
  goods: ['Heating'],
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.title()
  },
  id: datatype.number(),
  images: [internet.avatar()],
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
    longitude:datatype.float({ min: 4, max: 10, precision: 0.001 }),
    zoom: 8
  },
  maxAdults: datatype.number(),
  previewImage: internet.avatar(),
  price: datatype.number(),
  rating: datatype.float({ min: 1, max: 5, precision: 0.1 }),
  title: lorem.words(10),
  typeOffer: 'apartment'
} as OfferType);


export const makeFakeComment = (): CommentType => ({
  comment: lorem.words(55),
  date: datatype.datetime().toString(),
  id: datatype.number(),
  rating: datatype.number({ min: 1, max: 5}),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.title()
  }
} as CommentType);


export const makeFakeOfferFavorParis = (): OfferType => ({
  bedrooms:  datatype.number(),
  city: {
    location: {
      latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
      longitude: datatype.float({ min: 4, max: 10, precision: 0.001 }),
      zoom: 10
    },
    name: 'Paris',
  },
  description: lorem.words(10),
  goods: ['Heating'],
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.title()
  },
  id: datatype.number(),
  images: [internet.avatar()],
  isFavorite: true,
  isPremium: datatype.boolean(),
  location: {
    latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
    longitude:datatype.float({ min: 4, max: 10, precision: 0.001 }),
    zoom: 8
  },
  maxAdults: datatype.number(),
  previewImage: internet.avatar(),
  price: datatype.number(),
  rating: datatype.float({ min: 1, max: 5, precision: 0.1 }),
  title: lorem.words(10),
  typeOffer: 'apartment'
} as OfferType);
