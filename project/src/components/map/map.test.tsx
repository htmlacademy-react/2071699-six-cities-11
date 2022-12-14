import {render, screen} from '@testing-library/react';
import Map from './map';
import {makeFakeOfferFavorParis} from '../../utils/mocks';

describe('Component: Map', () => {

  it('should render correctly', () => {
    const fakeOffers = Array.from({length: 5}, () => makeFakeOfferFavorParis());

    render(
      <Map
        city={fakeOffers[0].city}
        offers={fakeOffers}
        selectedPoint={fakeOffers[0].location}
        classNameMap={'cities'}
      />,
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

});
