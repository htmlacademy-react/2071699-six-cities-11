import {userProcess} from './user-process';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../constants';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {makeFakeUser} from '../../utils/mocks';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      authInfo: null,
      hasErrorLogin: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, authInfo: null, hasErrorLogin: false});
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      const fakeUser = makeFakeUser();
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: fakeUser}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, authInfo: fakeUser, hasErrorLogin: false});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, authInfo: null, hasErrorLogin: false});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, authInfo: null, hasErrorLogin: false});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, authInfo: null, hasErrorLogin: true});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, authInfo: null, hasErrorLogin: false});
    });
  });
});
