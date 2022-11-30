import {NameSpace} from '../../constants';
import {State} from '../../types/state';


export const getSortType = (state: State): string => state[NameSpace.Sort].sortType;
export const getSortView = (state: State): string => state[NameSpace.Sort].sortView;
