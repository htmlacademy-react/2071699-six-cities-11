import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offersList: OfferType[];
  pageType: string;
  onListCardHover: (cardId: number) => void;
  cityName: string;
}

function OffersList({offersList, pageType, onListCardHover, cityName}: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.filter((offer) => offer.city.name === cityName).map((offer) =>
        (
          <CardScreen
            key={offer.id}
            card={offer}
            pageType={pageType}
            onChangeCard={onListCardHover}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
