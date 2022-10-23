import MainPage from '../../pages/main-page/main-page';

type OffersProps = {
  offersCount: number;
}

function App({offersCount}: OffersProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}

export default App;
