import {CommentType} from '../types/comments';

export type CommentsByOferType = {
  hotelId: number;
  commentsByOffer: CommentType[];
}

export const comments: CommentsByOferType[] = [
  {hotelId: 1,
    commentsByOffer: [{
      comment: 'Превосходно!!!!!!!!!!',
      date: '05.11.2021',
      id: 1,
      rating: 5,
      user: {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 1,
        isPro: false,
        name: 'Аноним'
      }
    },
    {
      comment: 'Неплохо',
      date: '12.10.2021',
      id: 2,
      rating: 4,
      user: {
        avatarUrl: 'img/avatar-max.jpg',
        id: 2,
        isPro: false,
        name: 'Иван'
      }
    }]
  },

  {hotelId: 2,
    commentsByOffer: [{
      comment: 'Не очень',
      date: '08.11.2021',
      id: 3,
      rating: 2,
      user: {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 1,
        isPro: false,
        name: 'Мария'
      }
    },
    {
      comment: 'Все плохо',
      date: '11.09.2021',
      id: 4,
      rating: 4,
      user: {
        avatarUrl: 'img/avatar-max.jpg',
        id: 2,
        isPro: false,
        name: 'Андрей'
      }
    }]
  },
  {hotelId: 3,
    commentsByOffer: [{
      comment: 'Хорошо',
      date: '05.02.2020',
      id: 5,
      rating: 2,
      user: {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 1,
        isPro: false,
        name: 'Ольга'
      }
    }]
  },
  {hotelId: 4,
    commentsByOffer: [{
      comment: 'Хорошо',
      date: '05.02.2020',
      id: 6,
      rating: 2,
      user: {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 1,
        isPro: false,
        name: 'Ольга'
      }
    },
    {
      comment: 'Хорошо',
      date: '06.02.2020',
      id: 7,
      rating: 3,
      user: {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 1,
        isPro: false,
        name: 'Вася'
      }
    },
    {
      comment: 'Хорошо',
      date: '07.02.2020',
      id: 8,
      rating: 4,
      user: {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 1,
        isPro: true,
        name: 'Петя'
      }
    }]
  }
];
