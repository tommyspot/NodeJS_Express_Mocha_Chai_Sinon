import React from 'react';
import PropTypes from 'prop-types';

import EditUserModal from './editUserModal.jsx';

export default class User extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.user.userEmail}</td>
        <td>{this.props.user.userPassword}</td>
        <td className="text-center">
          <button className="btn btn-primary" data-toggle="modal" data-target="#userInfoModal">Edit</button>&nbsp;
          <EditUserModal id="userInfoModal" user={this.props.user} title="Edit user" updateUser={this.props.updateUser} />

          <button className="btn btn-danger" onClick={() => this.props.removeUser(this.props.index)}>Delete</button>
        </td>
      </tr>
    );
  }
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  removeUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
}