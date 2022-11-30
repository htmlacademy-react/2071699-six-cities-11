import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {CommentsData} from '../../types/state';
import {fetchCommentsAction} from '../api-actions';
import {CommentType} from '../../types/comments';
import _ from 'lodash';

const initialState: CommentsData = {
  comments: [],
  isCommentsLoading: false,
  hasErrorComments: false,
};

export const commentsData = createSlice({
  name: NameSpace.DataComments,
  initialState,
  reducers: {
    loadCommentsNew: (state, action: PayloadAction<{comments: CommentType[]}>) => {
      state.comments = _.sortBy(action.payload.comments, 'date').reverse();
    }},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
        state.hasErrorComments = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = _.sortBy(action.payload, 'date').reverse();
        state.isCommentsLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsLoading = false;
        state.hasErrorComments = true;
      });
  }
});

export const {loadCommentsNew} = commentsData.actions;
