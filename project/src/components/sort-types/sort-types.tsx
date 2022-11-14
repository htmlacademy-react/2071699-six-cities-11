import {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sortOffersPriceLow, sortOffersPriceHigh, sortOffersPopular, sortOffersRating, sortMenuView} from '../../store/action';
import {SortTypes, SortTypesArray} from '../../constants';


function SortForm(): JSX.Element {

  const CurrentSortType = useAppSelector((state) => state.sortType);
  const CurrentSortView = useAppSelector((state) => state.sortView);
  const dispatch = useAppDispatch();

  const handleChange = (event : MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    switch (event.currentTarget.innerText) {
      case SortTypes.Popular:
        dispatch(sortOffersPopular());
        break;
      case SortTypes.PriceHigh:
        dispatch(sortOffersPriceHigh());
        break;
      case SortTypes.PriceLow:
        dispatch(sortOffersPriceLow());
        break;
      case SortTypes.Rating:
        dispatch(sortOffersRating());
        break;
      default:
        dispatch(sortOffersPopular());
        break;
    }
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {CurrentSortType}
        <svg className="places__sorting-arrow" width="7" height="4" onClick={()=>dispatch(sortMenuView())}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${CurrentSortView}`}>
        {SortTypesArray.map((sortType) =>
          (
            <li
              key={sortType}
              className={`places__option  ${sortType === CurrentSortType ? 'places__option--active' : ''} `}
              tabIndex={0}
              onClick={handleChange}
            >
              {sortType}
            </li>)
        )}
      </ul>
    </form>);
}


export default SortForm;
