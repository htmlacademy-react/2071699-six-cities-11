export type HostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  }
export type LocationType ={
    latitude: number;
    longitude: number;
    zoom: number;
    };
export type CityType = {
      location:LocationType;
      name: string;
      };

export type OfferType = {
  id: number;
  bedrooms: number;
  city: CityType;
  description: string;
  goods: string[];
  host: HostType;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  typeOffer: string;
};
