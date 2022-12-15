import {renderHook} from '@testing-library/react';
import useMap from './use-map';
import {makeFakeOffer} from '../../utils/mocks';

const mapRef = {current:  document.createElement('section')};


const fakeOffer = makeFakeOffer();


describe('Hook: useMap', () => {
  it('should return element', () => {
    const {result} = renderHook(() =>
      useMap(mapRef, fakeOffer.city),
    );

    expect(result).toBeInstanceOf(Object);
  });

});
