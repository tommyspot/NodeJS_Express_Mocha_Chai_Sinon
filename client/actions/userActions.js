import * as types from './action-types';

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function deleteUserSuccess(userId) {
  return {
    type: types.DELETE_USER_SUCCESS,
    userId
  };
}

export function addUserSuccess(newUser) {
  return {
    type: types.ADD_USER_SUCCESS,
    newUser
  };
}

export function updateUserSuccess(newUser) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    newUser
  };
}