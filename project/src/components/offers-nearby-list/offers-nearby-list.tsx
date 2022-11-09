import OfferNearbyItem from '../../components/offers-nearby-item/offers-nearby-item';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offersList: OfferType[];
  pageType: string;
  cityName: string;
}

function OfferNearbyList({offersList, pageType, cityName}: OffersListProps): JSX.Element {

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
