import Axios from 'axios';
import store from '../store';
import { getUsersSuccess, deleteUserSuccess, addUserSuccess, updateUserSuccess } from '../actions/userActions';

export class UserService {

  getAllUsers(successFunc, errorFunc) {
    return Axios.get('/users')
      .then(res => {
        store.dispatch(getUsersSuccess(res.data.data));
        return successFunc(res);
      })
      .catch(error => {
        return errorFunc('Fetch users error!!!');
      });
  }

  deleteUser(id, successFunc, errorFunc) {
    return Axios.delete(/users/ + id)
      .then(res => {
        store.dispatch(deleteUserSuccess(id));
        return successFunc(res);
      })
      .catch(error => {
        return errorFunc('Delete user error!!!');
      })
  }

  addUser(email, password, successFunc, errorFunc){
    return Axios.post('/users', {
        email: email,
        password: password
      })
      .then(res => {
        if(res.data && res.data.status === 501){
          return errorFunc(res.data.message);
        } else {
          console.log(res.data.data);
          store.dispatch(addUserSuccess(res.data.data));
          return successFunc(res);
        }
      })
      .catch(error => {
        return errorFunc('Add user error!!!');
      });
  }

  updateUser(id, email, password, successFunc, errorFunc){
    return Axios.put('/users/' + id, {
        email: email,
        password: password
      })
      .then(res => {
        if(res.data && res.data.status === 501){
          return errorFunc(res.data.message);
        } else {
          store.dispatch(updateUserSuccess(res.data.data));
          return successFunc(res);
        }
      })
      .catch(error => {
        return errorFunc('Update user error!!!');
      });
  }
}

export let userService = new UserService();