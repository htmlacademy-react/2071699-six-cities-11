import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {CommentsData} from '../../types/state';
import {fetchCommentsAction} from '../api-actions';

const initialState: CommentsData = {
  comments: [],
  isCommentsLoading: false,
};

export const commentsData = createSlice({
  name: NameSpace.DataComments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      });
  }
});
