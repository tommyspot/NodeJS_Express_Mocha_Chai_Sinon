import React from 'react';

export default class UserDetail extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        User Detail {this.props.match.params.id}
      </div>
    );
  }
};