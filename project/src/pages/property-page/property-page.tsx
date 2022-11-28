import {OfferType} from '../../types/offers';
import {useParams} from 'react-router-dom';
import RoomPage from '../../components/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector} from '../../hooks';
import {getOffers} from '../../store/offers-data/selectors';


function PropertyPage (): JSX.Element {
  useScrollToTop();
  const params = useParams();
  const offersForCity = useAppSelector(getOffers);
  const currentOffer = offersForCity.find((el) => el.id.toString() === params.id) as OfferType;

  if (currentOffer) {
    return ( <RoomPage offer ={currentOffer} offersForCity={offersForCity} />);
  } else {
    return (<NotFoundScreen />);
  }

}

export default PropertyPage;
