import {useState} from 'react';
import CardScreen from '../../components/card/card';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offersList: OfferType[];
  pageType: string;
}

function OffersList({offersList, pageType}: OffersListProps): JSX.Element {
  const [cardData, setCardData] = useState({
    cardId: 0,
    isActive: false,
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) =>
        (
          <CardScreen
            key={offer.id}
            card={offer}
            pageType={pageType}
            onChangeCard={(id: number, sign: boolean) => {setCardData({...cardData, cardId: id, isActive: sign});
              // eslint-disable-next-line no-console
              console.log(cardData);}}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
