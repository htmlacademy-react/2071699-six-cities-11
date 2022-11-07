import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offersList: OfferType[];
  pageType: string;
  onListCardHover: (cardId: number) => void;
}

function OffersList({offersList, pageType, onListCardHover}: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) =>
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
