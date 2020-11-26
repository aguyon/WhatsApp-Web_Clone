import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Login from '../pages/Login';
import Main from '../pages/Main';

import LightTheme from './theme/LightTheme';
import DarkTheme from './theme/DarkTheme';

const App = (props: any): JSX.Element => {
  const [theme, setTheme] = React.useState<string>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', theme);
    } else {
      setTheme('light');
      localStorage.setItem('theme', theme);
    }
  };

  const themeSelected: string = localStorage.getItem('theme');

  return (
    <ThemeProvider theme={themeSelected === 'light' ? LightTheme : DarkTheme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/"
            render={() => <Main theme={themeSelected} toggleTheme={toggleTheme} />}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
