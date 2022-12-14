import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReviewsItem from '../reviews-item/reviews-item';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {store} from '../../store';
import {fetchCommentsAction} from '../../store/api-actions';
import {getCommentsDataLoadingStatus, getComments, getErrorStatusComments} from '../../store/comments-data/selectors';
import {COUNT_COMMENTS_VIEW} from '../../constants';

function ReviewsList () : JSX.Element {
  const isCommentsLoading = useAppSelector(getCommentsDataLoadingStatus);
  const hasErrorComments = useAppSelector(getErrorStatusComments);
  const dispatch = useAppDispatch();

  const params = useParams();
  useEffect(() => {
    if(params.id) {
      store.dispatch(fetchCommentsAction(params.id.toString()));
    }
  }, [params.id]);

  const onReload = () => {
    if(params.id) {
      dispatch(fetchCommentsAction(params.id.toString()));
    }
  };

  const commentsByOfferAll = useAppSelector(getComments);
  const commentsByOffer = commentsByOfferAll.slice(0, COUNT_COMMENTS_VIEW);
  const countComments = commentsByOffer ? commentsByOffer.length : 0;


  if (isCommentsLoading) {
    return (<LoadingScreen />);}
  if (hasErrorComments) {
    return (<ErrorScreen message={'комментарии'} onReload={onReload}/>); }

  return (
    <div>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{countComments}</span></h2>
      <ul className="reviews__list">
        {commentsByOffer &&
        commentsByOffer.map((comment) => <ReviewsItem key={comment.id} comment={comment} data-testid="comment"/>)}
      </ul>
    </div>
  );
}


export default ReviewsList;
