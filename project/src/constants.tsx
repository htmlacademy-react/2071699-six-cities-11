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

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY: CityType = {
  location: {
    latitude: 48.8534100,
    longitude: 2.3488000,
    zoom: 10
  },
  name: 'Paris'
};

