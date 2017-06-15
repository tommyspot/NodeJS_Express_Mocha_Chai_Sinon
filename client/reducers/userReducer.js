import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  users: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.DELETE_USER_SUCCESS:
      // Use lodash to create a new user array without the user we want to remove
      const remainUsers = _.filter(state.users, user => user._id != action.userId);
      return Object.assign({}, { users: remainUsers });

    case types.ADD_USER_SUCCESS:
      const newUsers = state.users.concat(action.newUser);
      return Object.assign({}, { users: newUsers });

    case types.UPDATE_USER_SUCCESS:
      const updatedUsers = _.filter(state.users, user => user._id != action.newUser._id).concat(action.newUser);
      return Object.assign({}, { users: updatedUsers });
  }

  return state;
}

export default userReducer;