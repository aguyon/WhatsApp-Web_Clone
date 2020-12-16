import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Login from '../pages/Login';
import Main from '../pages/Main';

import withSplashScreen from './withSplashScreen';

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Main} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default withSplashScreen(App);
