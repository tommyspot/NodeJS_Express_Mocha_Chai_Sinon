//https://css-tricks.com/learning-react-router/
require("./css/app.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// Notice that we've organized all of our routes into a separate file.
import router from './router';

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('main')
);