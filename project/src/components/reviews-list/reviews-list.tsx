import ReviewsItem from '../../components/reviews-item/reviews-item';
import {useAppSelector} from '../../hooks';
/*import {store} from '../../store';
import {fetchCommentsAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';*/


function ReviewsList () : JSX.Element {

  /*const params = useParams();
  useEffect(() => {
    if(params.id) {
      store.dispatch(fetchCommentsAction(params.id.toString()));
    }
  }, [params.id]);*/
  const commentsByOffer = useAppSelector((state) => state.comments);
  const countComments = commentsByOffer ? commentsByOffer.length : 0;

  return (
    <div>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{countComments}</span></h2>
      <ul className="reviews__list">
        {commentsByOffer &&
        commentsByOffer.map((comment) => <ReviewsItem key={comment.id} comment={comment} />)};

      </ul>
    </div>
  );

}

export default ReviewsList;
