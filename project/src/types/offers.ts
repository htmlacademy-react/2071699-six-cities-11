export type hostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  }
export type locationType ={
    latitude: number;
    longitude: number;
    zoom: number;
    };
export type cityType = {
      location:locationType;
      name: string;
      };

export type OfferType = {
  id: number;
  bedrooms: number;
  city: cityType;
  description: string;
  goods: string[];
  host: hostType;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  photo: string;
  price: number;
  rating: number;
  title: string;
  typeOffer: string;
};
