import {Fragment} from 'react';
import {useState, FormEvent, useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {sendNewComment} from '../../store/api-actions';
import {RATING_STARS} from '../../constants';


type CommentProps = {
  hotelId: number;
}


function CommentForm({hotelId}:CommentProps): JSX.Element {
  const EMPTY_COMMENT = {comment: '', rating: 0};
  const [commentData, setCommentData] = useState(EMPTY_COMMENT);
  const [currentChecked, setCurrentChecked] = useState<string | null>(null);
  const [disabledButton, setDisabledButton] = useState(true);


  const commentChangeHandle = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setCommentData({...commentData, [name]: value});
    evt.target.setAttribute('checked', 'true');
    if (name === 'rating') {
      setCurrentChecked(value);
    }
  };
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (commentData.comment.length >= 5 && commentData.comment.length <= 30 && commentData.rating !== 0) {
      dispatch(sendNewComment({
        comment: commentData.comment,
        rating: commentData.rating,
        hotelId: hotelId,
      }));
      setCommentData(EMPTY_COMMENT);
      setCurrentChecked(null);
      setDisabledButton(true);
      document.getElementsByName('rating').forEach((el)=>{
        el.setAttribute('checked', 'false');
        el.removeAttribute('checked');
      });
    }
  };


  useEffect(() => {
    if (commentData.comment.length >= 5 && commentData.comment.length <= 30 && commentData.rating !== 0) {
      setDisabledButton(false);
    }
    else {
      setDisabledButton(true);
    }
  }, [commentData.comment, commentData.rating]);


  const RatingInputs : JSX.Element[] = (
    [...RATING_STARS].reverse().map((item) => (
      <Fragment key={item}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={item}
          id={`${item}-stars`}
          type="radio"
          onChange={commentChangeHandle}
          checked={currentChecked === item}
        />
        <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>))

  );

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {RatingInputs}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={commentData.comment}
        onChange={commentChangeHandle}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabledButton}>
            Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
