import CardScreen from '../../components/card/card';
import {useAppSelector} from '../../hooks';

type OffersListProps = {
  pageType: string;
}

function OffersList({pageType}: OffersListProps): JSX.Element {

  const offerSort = useAppSelector((state) => state.offers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerSort.map((offer) =>
        (
          <CardScreen
            key={offer.id}
            card={offer}
            pageType={pageType}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
