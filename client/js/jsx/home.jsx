import React from 'react';
import { Link } from 'react-router-dom';
import WheelChoice from './components/wheel_choice.jsx';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <WheelChoice />
      </div>
    );
  }
};