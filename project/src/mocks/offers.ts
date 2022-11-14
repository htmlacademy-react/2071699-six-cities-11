import {HouseTypes} from '../constants';
import {OfferType} from '../types/offers';


export const offers: OfferType[] = [
  {
    id: 1,
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'Description 1',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'http://placekitten.com/200/200',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 1000,
    rating: 4.9,
    title: 'Title 1',
    typeOffer: HouseTypes.House,
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
      name: 'Amsterdam'
    },
    description: 'Description 2',
    goods: ['Wifi', 'Cable TV'],
    host: {
      avatarUrl: 'http://placekitten.com/300/300',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg'
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 2000,
    rating: 4,
    title: 'Title 2',
    typeOffer: HouseTypes.House,
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
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 5000,
    rating: 3.2,
    title: 'Title 3',
    typeOffer: HouseTypes.Room,
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
      name: 'Amsterdam'
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
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 1,
    previewImage: 'img/studio-photos.jpg',
    price: 30000,
    rating: 2,
    title: 'Title 4',
    typeOffer: HouseTypes.Hotel,
  },
  {
    id: 5,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Description 5',
    goods: ['Wifi'],
    host: {
      avatarUrl: 'http://placekitten.com/500/500',
      id: 1,
      isPro: false,
      name: 'Kate',
    },
    images: ['img/studio-photos.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 1,
    previewImage: 'img/studio-photos.jpg',
    price: 900,
    rating: 2,
    title: 'Title 5',
    typeOffer: HouseTypes.Hotel,
  }
];
