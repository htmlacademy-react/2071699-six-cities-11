import {CommentType} from '../../types/comments';
import {PRC_WIDTH_STYLE} from '../../constants';
type commentProps = {
  comment: CommentType;
}

function ReviewsItem ({comment}: commentProps) : JSX.Element {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${PRC_WIDTH_STYLE * Math.round(comment.rating)}%`}}></span>
            <span className="visually-hidden">{comment.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>
          {new Date(comment.date).toLocaleString('en-GB', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );

}

export default ReviewsItem;
