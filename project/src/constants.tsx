import {CityType} from './types/offers';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HouseTypes {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export const IMG_MARKER_DEFAULT = 'img/pin.svg';

export const IMG_MARKER_CURRENT = 'img/pin-active.svg';

export const CITYCENTER: CityType = {
  location: {
    latitude: 52.3740300,
    longitude:4.8896900,
    zoom: 10
  },
  name: 'Amsterdam'
};
