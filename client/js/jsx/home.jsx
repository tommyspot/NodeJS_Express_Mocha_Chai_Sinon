import React from 'react';
import { Link } from 'react-router-dom';

import WheelChoice from './components/wheel_choice.jsx';
import Header from './components/header.jsx';
 
export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <WheelChoice />
        <Link to="/users">Go To UserList</Link>
      </div>
    );
  }
};