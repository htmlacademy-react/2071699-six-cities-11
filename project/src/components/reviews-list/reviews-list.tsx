import ReviewsItem from '../../components/reviews-item/reviews-item';
import {CommentType} from '../../types/comments';

type commentsProps = {
  comments: CommentType[];
}

function ReviewsList ({comments}: commentsProps) : JSX.Element {

  return (

    <ul className="reviews__list">
      {comments.map((comment) => <ReviewsItem key={comment.id} comment={comment} />)};
    </ul>

  );

}

export default ReviewsList;
