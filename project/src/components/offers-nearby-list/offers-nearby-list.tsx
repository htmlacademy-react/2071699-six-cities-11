import OfferNearbyItem from '../../components/offers-nearby-item/offers-nearby-item';
import {OfferType} from '../../types/offers';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {getNearbyDataLoadingStatus, getErrorStatusNearby} from '../../store/nearby-offers-data/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import {useParams} from 'react-router-dom';
import {fetchOffersNearby} from '../../store/api-actions';

type OffersListProps = {
  offersList: OfferType[];
  pageType: string;
  cityName: string;
}

function OfferNearbyList({offersList, pageType, cityName}: OffersListProps): JSX.Element {
  const isOffersDataLoading = useAppSelector(getNearbyDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatusNearby);
  const dispatch = useAppDispatch();
  const params = useParams();

  const onReload = () => {
    if(params.id) {
      dispatch(fetchOffersNearby(params.id.toString()));
    }
  };
  if (isOffersDataLoading) {
    return (<LoadingScreen />);
  }
  if (hasError && !isOffersDataLoading) {
    return (<ErrorScreen message={'список предложений неподалеку'} onReload={onReload}/>);
  }

  return (
    <div className="near-places__list places__list">
      {offersList.filter((offer) => offer.city.name === cityName).map((offer) =>
        (
          <OfferNearbyItem
            key={offer.id}
            offer={offer}
            pageType={pageType}
          />
        )
      )}
    </div>
  );
}

export default OfferNearbyList;
