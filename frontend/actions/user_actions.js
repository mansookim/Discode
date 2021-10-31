import * as UserApiUtil from '../utils/user_api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RESET_USER_ERRORS = "RESET_USER_ERRORS"

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const resetUserErrors = () => ({
  type: RESET_USER_ERRORS
});

export const updateUser = (user) => (dispatch) => (
  UserApiUtil.updateUser(user)
    .then(
      (user) => dispatch(receiveUser(user)),
      (res) => dispatch(receiveUserErrors(res.responseJSON))
    )
);