import { combineReducers } from 'redux';
// Reducers
import userReducer from './userReducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer
});

export default reducers;