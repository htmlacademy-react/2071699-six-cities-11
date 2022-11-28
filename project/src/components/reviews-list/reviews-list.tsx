import ReviewsItem from '../../components/reviews-item/reviews-item';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {fetchCommentsAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getCommentsDataLoadingStatus, getComments} from '../../store/comments-data/selectors';


function ReviewsList () : JSX.Element {
  const isCommentsLoading = useAppSelector(getCommentsDataLoadingStatus);
  const params = useParams();
  useEffect(() => {
    if(params.id) {
      // eslint-disable-next-line no-console
      console.log(params.id);
      store.dispatch(fetchCommentsAction(params.id.toString()));
    }
  }, [params.id]);

  const commentsByOfferAll = useAppSelector(getComments);
  const commentsByOffer = commentsByOfferAll.slice(0, 10);
  const countComments = commentsByOfferAll ? commentsByOfferAll.length : 0;


  if (isCommentsLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <div>
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{countComments}</span></h2>
        <ul className="reviews__list">
          {commentsByOffer &&
        commentsByOffer.map((comment) => <ReviewsItem key={comment.id} comment={comment} />)}
        </ul>
      </div>
    );
  }

}

export default ReviewsList;
