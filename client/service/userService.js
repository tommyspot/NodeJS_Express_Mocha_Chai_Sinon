import Axios from 'axios';

export class UserService {

  getAllUsers(successFunc, errorFunc) {
    return Axios.get('/users')
      .then(res => {
        return successFunc(res.data.data);
      })
      .catch(error => {
        return errorFunc('Fetch users error!!!');
      });
  }

  deleteUser(id, successFunc, errorFunc) {
    return Axios.delete(/users/ + id)
      .then(res => {
        console.log(res.data.message);
        return successFunc(res.data.data);
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
        console.log(res);
        return this.getAllUsers(successFunc, errorFunc);
      })
      .catch(error => {
        return errorFunc('Add user error!!!');
      });
  }



}

export let userService = new UserService();