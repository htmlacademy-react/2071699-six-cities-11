import CardScreen from '../../components/card-screen/card-screen';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offer: OfferType;
  pageType: string;
}

function OfferNearbyItem ({offer, pageType}: OffersListProps) : JSX.Element {
  return (
    <CardScreen
      card={offer}
      pageType={pageType}
    />);
}

export default OfferNearbyItem;
