import { shallow, mount, render } from 'enzyme';
import React from 'react';

import { UserHome } from '../../js/jsx/containers/userHome.jsx';
import UserList from '../../js/jsx/components/userList.jsx';
import UserModal from '../../js/jsx/components/userModal.jsx';
import { userService } from '../../service/userService.js';

describe('UserHome', () => {

  describe('render', () =>{
    it('renders user list component', () => {
      var users = [];
      const wrapper = mount(<UserHome users={users} />);
      expect(wrapper.find(UserList).length).toBe(1);
    });

    it('renders user modal component', () => {
      var users = [];
      const wrapper = mount(<UserHome users={users} />);
      expect(wrapper.find(UserModal).length).toBe(1);
    });
  });

  describe('updateUser', () =>{
    it('call user service for update user', () => {
      userService.updateUser = jest.fn();
      var users = [];
      const wrapper = mount(<UserHome users={users} />);
      wrapper.instance().updateUser(1, 'email', 'password');
      expect(userService.updateUser).toHaveBeenCalled();
    });
  });


});