import React from 'react';
//https://k94n.com/es6-modules-single-instance-pattern
import { userService } from '../../../service/userService.js';

import UserList from '../components/userList.jsx';
import UserModal from '../components/userModal.jsx';
import store from '../../../store';
import { connect } from 'react-redux';

export class UserHome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      errorMessage: ''
    }
    this.removeUser = this.removeUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  removeUser(index){
    let isRemove = confirm('Do you want to remove this user?');
    if(isRemove){
      let user = this.props.users[index];
      userService.deleteUser(user._id, (data) => {
        console.log('Delete the user successfully!!!');
      }, (error) => {
        console.log(error);
      });
    }
  }

  addUser(email, password){
    userService.addUser(email, password, (data) => {
      $("#userModal").modal('hide');
      this.setState({errorMessage: ''});
    }, (error) => {
      console.log(error);
      this.setState({errorMessage: error});
    });
  }

  updateUser(id, email, password){
    userService.updateUser(id, email, password, (data) => {
      $("#userInfoModal-" + id).modal('hide');
    }, (error) => {
      console.log(error);
    });
  }

  componentWillMount(){
    userService.getAllUsers((users) => {
      console.log('Get all user successfully!!!');
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>User List: <button className="btn btn-primary" data-toggle="modal" data-target="#userModal">Add user</button></h1>
        <UserModal id="userModal" title="Add user" saveUser={this.addUser} errorMessage={this.state.errorMessage}/>
        <UserList users={this.props.users} removeUser={this.removeUser} updateUser={this.updateUser}/>
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserHome);