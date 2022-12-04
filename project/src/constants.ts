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

export enum ImgMarker {
  MarkerDefault = 'img/pin.svg',
  MarkerCurrent = 'img/pin-active.svg'
}

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

export enum LengthComment {
  MinLength = 50,
  MaxLength = 300,
}

export const PRC_WIDTH_STYLE = 20;
export const DEFAULT_CITY = 'Paris';
