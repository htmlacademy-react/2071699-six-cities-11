import {NameSpace, AuthorizationStatus} from '../../constants';
import {State} from '../../types/state';
import {UserData} from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getAuthInfo = (state: State): UserData | null => state[NameSpace.User].authInfo;
