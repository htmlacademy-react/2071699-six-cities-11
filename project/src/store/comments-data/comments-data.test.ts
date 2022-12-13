import {commentsData, loadCommentsNew} from './comments-data';
import {CommentsData} from '../../types/state';
import {fetchCommentsAction, sendNewComment} from '../api-actions';
import {makeFakeComment} from '../../utils/mocks';
import {sortBy} from 'lodash';

describe('Reducer: comments', () => {
  let state: CommentsData;

  beforeEach(() => {
    state = {
      comments: [],
      isCommentsLoading: false,
      hasErrorComments: false,
      isSending: false,
      hasErrorSend: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(commentsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        comments: [],
        isCommentsLoading: false,
        hasErrorComments: false,
        isSending: false,
        hasErrorSend: false,
      });
  });

  describe('fetchCommentsAction test', () => {
    it('fetchCommentsAction fulfilled', () => {
      const fakeComments = Array.from({length: 5}, () => makeFakeComment());
      expect(commentsData.reducer(state, { type: fetchCommentsAction.fulfilled.type , payload: fakeComments}))
        .toEqual({
          comments: sortBy(fakeComments, 'date').reverse(),
          isCommentsLoading: false,
          hasErrorComments: false,
          isSending: false,
          hasErrorSend: false,
        });
    });
    it('fetchFavorites rejected', () => {
      expect(commentsData.reducer(state, { type: fetchCommentsAction.rejected.type }))
        .toEqual({ comments: [],
          isCommentsLoading: false,
          hasErrorComments: true,
          isSending: false,
          hasErrorSend: false});
    });
  });


  describe('sendNewComment test', () => {
    it('sendNewComment fulfilled', () => {
      expect(commentsData.reducer(state, { type: sendNewComment.fulfilled.type}))
        .toEqual({
          comments: [],
          isCommentsLoading: false,
          hasErrorComments: false,
          isSending: false,
          hasErrorSend: false,
        });
    });
    it('sendNewComment rejected', () => {
      expect(commentsData.reducer(state, { type: sendNewComment.rejected.type }))
        .toEqual({comments: [],
          isCommentsLoading: false,
          hasErrorComments: false,
          isSending: false,
          hasErrorSend: true});
    });
  });

  describe('loadCommentsNew test', () => {
    it('loadCommentsNew test', () => {
      const fakeComments = Array.from({length: 5}, () => makeFakeComment());
      const fakeCommentNew = makeFakeComment();
      const fakeCommentsAll = sortBy(fakeComments.concat([fakeCommentNew]), 'date').reverse();
      expect(commentsData.reducer({comments: fakeComments,
        isCommentsLoading: false,
        hasErrorComments: false,
        isSending: false,
        hasErrorSend: false},
      loadCommentsNew({comments: fakeCommentsAll})))
        .toEqual({comments: fakeCommentsAll,
          isCommentsLoading: false,
          hasErrorComments: false,
          isSending: false,
          hasErrorSend: false});
    });
  });

});
