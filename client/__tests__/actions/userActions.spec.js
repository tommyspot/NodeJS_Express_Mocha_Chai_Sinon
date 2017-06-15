import * as actions from '../../actions/userActions';
import * as types from '../../actions/actionTypes';

describe('user actions', () => {
  it('creates an action to add a new user', () => {
    const newUser = {_id: 1 };
    const expectedAction = {
      type: types.ADD_USER_SUCCESS,
      newUser
    }
    expect(actions.addUserSuccess(newUser)).toEqual(expectedAction);
  });

  it('creates an action to get all users', () => {
    const users = [{_id: 1 }, {_id: 2 }];
    const expectedAction = {
      type: types.GET_USERS_SUCCESS,
      users
    }
    expect(actions.getUsersSuccess(users)).toEqual(expectedAction);
  });

  it('creates an action to delete a user', () => {
    const userId = 1;
    const expectedAction = {
      type: types.DELETE_USER_SUCCESS,
      userId
    }
    expect(actions.deleteUserSuccess(userId)).toEqual(expectedAction);
  });

  it('creates an action to update a user', () => {
    const newUser = {_id: 1 };
    const expectedAction = {
      type: types.UPDATE_USER_SUCCESS,
      newUser
    }
    expect(actions.updateUserSuccess(newUser)).toEqual(expectedAction);
  });

})