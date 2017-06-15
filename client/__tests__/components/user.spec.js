import { shallow, mount, render } from 'enzyme';
import React from 'react';
import User from '../../js/jsx/components/user.jsx';
import EditUserModal from '../../js/jsx/components/editUserModal.jsx';

describe('User Component', () => {
  let user;
  beforeEach(function(){
    user = {_id: 1, userEmail: 'test@gmail.com', userPassword: '123'};
  });

  it('renders right info user', () => {
    const wrapper = shallow(<User user={user} index={0} removeUser={() => { }} updateUser={() => { }} />);
    expect(wrapper.find('td').length).toBe(4);
    expect(wrapper.find('td').at(0).text()).toBe('0');
    expect(wrapper.find('td').at(1).text()).toBe('test@gmail.com');
    expect(wrapper.find('td').at(2).text()).toBe('123');
  });

  it('renders edit user modal', () => {
    const wrapper = shallow(<User user={user} index={0} removeUser={() => { }} updateUser={() => { }} />);
    expect(wrapper.find(EditUserModal).length).toBe(1);
  });

  it('simulates remove user', () => {
    const removeUserFunc = jest.fn();
    const wrapper = shallow(<User user={user} index={0} removeUser={removeUserFunc} updateUser={() => { }} />);
    wrapper.find('.btn-danger').simulate('click');
    expect(removeUserFunc).toHaveBeenCalled();
  });
});