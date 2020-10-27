import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Login from '../pages/Login';
import Main from '../pages/Main';

import theme from './theme/NormalTheme';

const App = (props: any): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/chats" component={Main} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
