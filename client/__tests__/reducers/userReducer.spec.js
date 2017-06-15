import reducer from '../../reducers/userReducer';
import * as types from '../../actions/actionTypes';

describe('user reducer', () => {
  it('returns the initial state', () => {
    const action = {};
    expect(reducer(undefined, action)).toEqual({
      users: [],
    })
  });

  it('returns users state when action type is GET_USERS_SUCCESS', () => {
    const action = {
      users: [{}, {}],
      type: types.GET_USERS_SUCCESS
    };
    expect(reducer(undefined, action)).toEqual({
      users: [{}, {}]
    })
  });

  it('returns users state when action type is DELETE_USER_SUCCESS', () => {
    const action = {
      userId: 1,
      type: types.DELETE_USER_SUCCESS
    };
    const state = {users: [{_id: 1}, {_id: 2}]};
    expect(reducer(state, action)).toEqual({
      users: [{_id: 2}]
    })
  });

  it('returns users state when action type is ADD_USER_SUCCESS', () => {
    const action = {
      newUser: {_id: 1},
      type: types.ADD_USER_SUCCESS
    };
    expect(reducer(undefined, action)).toEqual({
      users: [{_id: 1}]
    })
  });

  it('returns users state when action type is UPDATE_USER_SUCCESS', () => {
    const action = {
      newUser: {_id: 1, name: 'test02'},
      type: types.UPDATE_USER_SUCCESS
    };
    expect(reducer({users: [{_id: 1, name: 'test01'}]}, action)).toEqual({
      users: [{_id: 1, name: 'test02'}]
    })
  });
});