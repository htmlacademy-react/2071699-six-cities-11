import _ from 'lodash';
import {useState, useEffect} from 'react';
import CardScreen from '../../components/card-screen/card-screen';
import {useAppSelector} from '../../hooks';
import {getOffers} from '../../store/offers-data/selectors';
import {SortTypes} from '../../constants';
import {getSortType} from '../../store/sort-process/selectors';


type OffersListProps = {
  pageType: string;
}

function OffersList({pageType}: OffersListProps): JSX.Element {

  const offersNotSort = useAppSelector(getOffers);
  const currentSortType = useAppSelector(getSortType);
  const [offerSort, setOfferSort] = useState(offersNotSort);

  useEffect(() => {
    switch (currentSortType) {
      case SortTypes.Popular:
        setOfferSort(offersNotSort);
        break;
      case SortTypes.PriceLow:
        setOfferSort(_.sortBy(offersNotSort, 'price').reverse());
        break;
      case SortTypes.PriceHigh:
        setOfferSort(_.sortBy(offersNotSort, 'price'));
        break;
      case SortTypes.Rating:
        setOfferSort(_.sortBy(offersNotSort, 'rating').reverse());
        break;
    }}, [currentSortType, offersNotSort]);

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
