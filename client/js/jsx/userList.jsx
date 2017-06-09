import React from 'react';
import { Link } from 'react-router-dom';

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        User List<br/>
        <Link to="/users/1">Go to UserDetail</Link>
      </div>
    );
  }
};