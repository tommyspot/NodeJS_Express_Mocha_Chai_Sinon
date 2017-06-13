import React from 'react';
import PropTypes from 'prop-types';

export default class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }

  render(){
    return (
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {
                  this.props.errorMessage !== '' ? <div className="alert alert-danger" role="alert">{this.props.errorMessage}</div> : null
                }

                <div className="form-group">
                  <label htmlFor="email" className="form-control-label">Email:</label>
                  <input type="text" className="form-control" id="email" name="email" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-control-label">Password:</label>
                  <input type="password" className="form-control" id="password" name="password" onChange={this.handleInputChange}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => this.props.saveUser(this.state.email, this.state.password)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserModal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  saveUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}