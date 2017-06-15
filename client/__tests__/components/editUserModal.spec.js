import { shallow, mount, render } from 'enzyme';
import React from 'react';
import EditUserModal from '../../js/jsx/components/editUserModal.jsx';

describe('EditUserMdal Component', () => {
  let user;
  beforeEach(() => {
    user = {_id: 1, userEmail: 'test@gmail.com', userPassword: '123'};
  });

  it('renders right info user', () => {
    const wrapper = shallow(<EditUserModal id={'0'} user={user} index={0} title='Edit Modal' updateUser={() =>{}} />);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('simulates update user event', () => {
    const updateUserFunc = jest.fn();
    const wrapper = shallow(<EditUserModal id={'0'} user={user} index={0} title='Edit Modal' updateUser={updateUserFunc} />);
    wrapper.find('.btn-primary').simulate('click');
    expect(updateUserFunc).toHaveBeenCalled();
  });

  describe('handleInputChange method', () => {
    let user;
    beforeEach(() => {
      user = {_id: 1, userEmail: 'test@gmail.com', userPassword: '123'};
    });

    it('changes email state', () => {
      let event = {
        target: {
          value: 'test1@gmail.com',
          name: 'email'
        }
      };
      const wrapper = shallow(<EditUserModal id={'0'} user={user} index={0} title='Edit Modal' updateUser={() =>{}} />);
      const instance = wrapper.instance();
      instance.handleInputChange(event);
      expect(instance.state.email).toBe('test1@gmail.com');
    });

    it('changes password state', () => {
      let event = {
        target: {
          value: '123456',
          name: 'password'
        }
      };
      const wrapper = shallow(<EditUserModal id={'0'} user={user} index={0} title='Edit Modal' updateUser={() =>{}} />);
      const instance = wrapper.instance();
      instance.handleInputChange(event);
      expect(instance.state.password).toBe('123456');
    });
  });

});