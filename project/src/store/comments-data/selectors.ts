import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {CommentType} from '../../types/comments';

export const getComments = (state: State): CommentType[] => state[NameSpace.DataComments].comments;
export const getCommentsDataLoadingStatus = (state: State): boolean => state[NameSpace.DataComments].isCommentsLoading;
export const getErrorStatusComments = (state: State): boolean => state[NameSpace.DataComments].hasErrorComments;
export const getStatusSending = (state: State): boolean => state[NameSpace.DataComments].isSending;
