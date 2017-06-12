import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import User from './user.jsx';

export default class UserList extends React.Component {
  render() {
    return (
      <div>
          {/*<Link to="/users/1">Go to UserDetail</Link>*/}
          <table className="table table-bordered table-hover">
            <thead  className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
            {
              this.props.users.map((user, index) => {
                return (
                  <User user={user} key={user._id} index={index} removeUser={this.props.removeUser}/>
                );
              })
            }
            </tbody>
          </table>
      </div>
    );
  }
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired
}