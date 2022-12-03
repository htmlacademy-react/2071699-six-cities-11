import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {OfferType} from '../../types/offers';
import RoomPage from '../../components/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector} from '../../hooks';
import {getOffers} from '../../store/offers-data/selectors';
import {getNearbyOffers} from '../../store/nearby-offers-data/selectors';
import {store} from '../../store';
import {fetchOffersNearby} from '../../store/api-actions';



function PropertyPage (): JSX.Element {
  useScrollToTop();
  const params = useParams();
  const offersForCity = useAppSelector(getOffers);
  const currentOffer = offersForCity.find((el) => el.id.toString() === params.id) as OfferType;

  useEffect(() => {
    if(params.id) {
      store.dispatch(fetchOffersNearby(params.id.toString()));
    }
  }, [params.id]);

  const nearbyOffers = useAppSelector(getNearbyOffers);

  if (currentOffer) {
    return ( <RoomPage offer ={currentOffer} nearbyOffers={nearbyOffers}/>);
  } else {
    return (<NotFoundScreen />);
  }

}

export default PropertyPage;
