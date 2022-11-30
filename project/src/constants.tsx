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

export enum SortTypes {
  Popular = 'Popular',
  PriceHigh = 'Price: low to high',
  PriceLow = 'Price: high to low',
  Rating = 'Top rated first'
}

export const SortTypesArray = [SortTypes.Popular, SortTypes.PriceHigh, SortTypes.PriceLow, SortTypes.Rating];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const RATING_STARS = ['1','2','3','4','5'];

export enum NameSpace {
  DataOffers = 'DATA_OFFERS',
  DataComments = 'DATA_COMMENTS',
  Sort = 'SORT',
  User = 'USER',
  DataNearby = 'DATA_NEAR',
  Favorites = 'FAVORITES',
}

export const COUNT_COMMENTS_VIEW = 10;
