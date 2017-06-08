import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layouts
// import MainLayout from './components/main-layout';

// Pages
import Home from './js/jsx/home.jsx';
import UserList from './js/jsx/userList.jsx';
// import UserList from './components/user-list';
// import UserProfile from './components/user-profile';
// import WidgetList from './components/widget-list';

export default (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/users" component={UserList} />
    </Switch>
  </Router>
);