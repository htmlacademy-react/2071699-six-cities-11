import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {CommentsData} from '../../types/state';
import {fetchCommentsAction, sendNewComment} from '../api-actions';
import {CommentType} from '../../types/comments';
import {sortBy} from 'lodash';

const initialState: CommentsData = {
  comments: [],
  isCommentsLoading: false,
  hasErrorComments: false,
  isSending: false,
};

export const commentsData = createSlice({
  name: NameSpace.DataComments,
  initialState,
  reducers: {
    loadCommentsNew: (state, action: PayloadAction<{comments: CommentType[]}>) => {
      state.comments = sortBy(action.payload.comments, 'date').reverse();
    }},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
        state.hasErrorComments = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = sortBy(action.payload, 'date').reverse();
        state.isCommentsLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsLoading = false;
        state.hasErrorComments = true;
      })
      .addCase(sendNewComment.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendNewComment.fulfilled, (state) => {
        state.isSending = false;
      });
  }
});

export const {loadCommentsNew} = commentsData.actions;
