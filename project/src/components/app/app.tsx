import MainPage from '../../pages/main-page/main-page';

interface OfferCard {
  id: number;
	imgSrc: string;
  coast: number;
}

type OffersProps = {
  offersCount: number;
  offersList: OfferCard[];
}

function App({offersCount, offersList}: OffersProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} offersList={offersList} />
  );
}

export default App;
