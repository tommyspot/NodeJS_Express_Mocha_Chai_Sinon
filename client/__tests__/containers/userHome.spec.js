import { shallow, mount, render } from 'enzyme';
import UserHome from '../../js/jsx/containers/userHome.jsx';
import UserList from '../../js/jsx/components/userList.jsx';

describe('UserHome', () =>{
  it('renders user list inside it', () => {
    const wrapper = mount(<UserHome />);
    expect(wrapper.find(UserList)).to.have.length(1);
  });
});

