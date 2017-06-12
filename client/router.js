import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Layouts
// import MainLayout from './components/main-layout';

// Pages
import Home from './js/jsx/home.jsx';
import UserHome from './js/jsx/userHome.jsx';
import UserDetail from './js/jsx/userDetail.jsx';

import Header from './js/jsx/components/header.jsx';


const UserComponent = () => (
    <Switch>
      <Route exact path='/users' component={UserHome}/>
      <Route path='/users/:id' component={UserDetail}/>
    </Switch>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={UserComponent}/>
    </Switch>
  </main>
)

const App =() => (
  <div>
    <Header />
    <Main />
  </div>
)

export default (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);