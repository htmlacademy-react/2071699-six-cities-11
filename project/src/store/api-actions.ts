import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {OfferType} from '../types/offers';
import {CommentType, CommentSendType} from '../types/comments';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {APIRoute, AuthorizationStatus, AppRoute} from '../constants';
import {store} from '.';
import {saveToken, dropToken} from '../services/token';
import {
  loadOffers,
  setOffersDataLoadingStatus,
  setStatusAuthorization,
  redirectToRoute,
  loadAuthInfo,
  loadComments,
  sendComment,
  setCommentsLoadingStatus
} from './action';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setStatusAuthorization(AuthorizationStatus.Auth));
      dispatch(loadAuthInfo(data));
    } catch {
      dispatch(setStatusAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setStatusAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setStatusAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    dispatch(setCommentsLoadingStatus(true));
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setCommentsLoadingStatus(false));
    dispatch(loadComments(data));
  },
);

export const sendNewComment = createAsyncThunk<void, CommentSendType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({comment, rating, hotelId}, {dispatch, extra: api}) => {
    dispatch(setCommentsLoadingStatus(true));
    const {data} = await api.post<CommentType>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    dispatch(sendComment(data));
    dispatch(setCommentsLoadingStatus(false));
    store.dispatch(fetchCommentsAction(hotelId.toString()));
  },
);
