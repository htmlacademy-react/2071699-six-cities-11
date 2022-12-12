import {sortProcess, sortOffersType, sortMenuView, resetSort} from './sort-process';
import {SortOffers} from '../../types/state';
import {SortTypes} from '../../constants';

describe('Reducer: sort', () => {
  let state: SortOffers;

  beforeEach(() => {
    state = {
      sortType: SortTypes.Popular,
      sortView: 'closed',
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(sortProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({sortType: SortTypes.Popular, sortView: 'closed'});
  });

  describe('sortOffersType test', () => {
    it('should update sortType', () => {
      expect(sortProcess.reducer(state, sortOffersType({currentType: SortTypes.PriceHigh})))
        .toEqual({sortType: SortTypes.PriceHigh, sortView: 'closed'});
    });
  });

  describe('sortMenuView test', () => {
    it('should update sort menu to open', () => {
      expect(sortProcess.reducer({sortType: SortTypes.Popular, sortView: 'closed'}, sortMenuView()))
        .toEqual({sortType: SortTypes.Popular, sortView: 'opened'});
    });

    it('should update sort menu to closed', () => {
      expect(sortProcess.reducer({sortType: SortTypes.PriceHigh, sortView: 'opened'}, sortMenuView()))
        .toEqual({sortType: SortTypes.PriceHigh, sortView: 'closed'});
    });
  });

  describe('resetSort test', () => {
    it('should have reset sort opened', () => {
      expect(sortProcess.reducer({sortType: SortTypes.PriceHigh, sortView: 'opened'}, resetSort()))
        .toEqual({sortType: SortTypes.Popular, sortView: 'closed'});
    });
    it('should have reset sort closed', () => {
      expect(sortProcess.reducer({sortType: SortTypes.PriceHigh, sortView: 'closed'}, resetSort()))
        .toEqual({sortType: SortTypes.Popular, sortView: 'closed'});
    });
  });


});
