import {HouseTypes} from '../constants';
import {OfferType} from '../types/offers';


export const offers: OfferType[] = [
  {
    id: 1,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Description 1',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'http://placekitten.com/200/200',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: ['img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    photo: 'img/apartment-01.jpg',
    price: 1000,
    rating: 5,
    title: 'Title 1',
    typeOffer: HouseTypes.HOUSE,
  },
  {
    id: 2,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Hamburg'
    },
    description: 'Description 2',
    goods: ['Wifi', 'Cable TV'],
    host: {
      avatarUrl: 'http://placekitten.com/300/300',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: ['img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    photo: 'img/apartment-02.jpg',
    price: 2000,
    rating: 4,
    title: 'Title 2',
    typeOffer: HouseTypes.HOUSE,
  },
  {
    id: 3,
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Description 3',
    goods: ['Wifi'],
    host: {
      avatarUrl: 'http://placekitten.com/400/400',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: ['img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    photo: 'img/apartment-03.jpg',
    price: 3000,
    rating: 3,
    title: 'Title 3',
    typeOffer: HouseTypes.HOUSE,
  },
  {
    id: 4,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'Description 4',
    goods: ['Wifi'],
    host: {
      avatarUrl: 'http://placekitten.com/500/500',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: ['img/studio-photos.jpg'],
    isFavorite: false,
    isPremium: true,
    maxAdults: 1,
    photo: 'img/studio-photos.jpg',
    price: 3000,
    rating: 2,
    title: 'Title 4',
    typeOffer: HouseTypes.HOUSE,
  }
];
