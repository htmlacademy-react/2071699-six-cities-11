export type UserCommentType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}
export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserCommentType;
}

export type CommentsOffersType = {
  hotelId: number;
  commentsByOffer: CommentType[];
}

export type CommentSendType = {
  comment: string;
  rating: string;
  hotelId: number;
}
