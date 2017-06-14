import { shallow, mount, render } from 'enzyme';
import React from 'react';
import UserList from '../../js/jsx/components/userList.jsx';
import User from '../../js/jsx/components/user.jsx';

describe('UserList', () => {
  it('renders table inside it', () => {
    const users = [{ _id: 1 }];
    const wrapper = shallow(<UserList users={users} removeUser={() => { }} updateUser={() => { }} />);
    expect(wrapper.find('table').length).toBe(1);
  });

  it('renders 2 users inside it', () => {
    const users = [{ _id: 1 }, { _id: 2 }];
    const wrapper = shallow(<UserList users={users} removeUser={() => { }} updateUser={() => { }} />);
    expect(wrapper.find(User).length).toBe(2);
  });

  // it('simulates a removed user', () => {
  //   const removeUser = jest.fn();
  //   const users = [{ _id: 1 }, { _id: 2 }];
  //   const wrapper = shallow(<UserList users={users} removeUser={removeUser} updateUser={() => { }} />);
    
  //   console.log(wrapper.find('.btn-danger').at(0));
  //   wrapper.find('.btn-danger').at(0).simulate('click');
  //   expect(removeUser).toBeCalled();
  // });
});

