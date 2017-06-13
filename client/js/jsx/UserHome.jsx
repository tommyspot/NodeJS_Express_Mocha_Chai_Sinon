import React from 'react';
//https://k94n.com/es6-modules-single-instance-pattern
import { userService } from '../../service/userService.js';

import UserList from './components/userList.jsx';
import UserModal from './components/userModal.jsx';

export default class UserHome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      isOpenModal: true
    }
    this.removeUser = this.removeUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  removeUser(index){
    let isRemove = confirm('Do you want to remove this user?');
    if(isRemove){
      let user = this.state.users[index];
      userService.deleteUser(user._id, (data) => {
        this.state.users.splice(index, 1);
        this.setState({users: this.state.users});
      }, null);
    }
  }

  addUser(email, password){
    userService.addUser(email, password, (data) => {
      this.setState({isOpenModal: false});
      this.setState({users: data});
    }, (error) => {
      console.log(error);
      this.setState({isOpenModal: true});
    });
  }

  updateUser(id, email, password){
    userService.updateUser(id, email, password, (data) => {
      this.setState({users: data});
    }, (error) => {
      console.log(error);
    });
  }

  componentWillMount(){
    userService.getAllUsers((users) => {
      this.setState({users: users});
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>User List: <button className="btn btn-primary" data-toggle="modal" data-target="#userModal">Add user</button></h1>
        {/*{
          this.state.isOpenModal ? <UserModal id="userModal" title="Add user" saveUser={this.addUser}/> : null
        }*/}
        <UserModal id="userModal" title="Add user" saveUser={this.addUser} />
        <UserList users={this.state.users} removeUser={this.removeUser} updateUser={this.updateUser} />
      </div>
    );
  }
};