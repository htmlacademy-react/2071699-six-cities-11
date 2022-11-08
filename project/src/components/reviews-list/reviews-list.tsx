import ReviewsItem from '../../components/reviews-item/reviews-item';
import {CommentType} from '../../types/comments';

type commentsProps = {
  comments: CommentType[];
}

function ReviewsList ({comments}: commentsProps) : JSX.Element {
  const countComments = comments ? comments.length : 0;
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{countComments}</span></h2>
      {countComments !== 0
        ?
        <ul className="reviews__list">
          {comments.map((comment) => <ReviewsItem key={comment.id} comment={comment} />)};
        </ul>
        : ''}
    </>
  );

}

export default ReviewsList;
