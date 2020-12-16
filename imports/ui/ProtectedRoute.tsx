import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

interface ProtectedRouteProps {
  exact: boolean;
  path: string;
  component: React.ComponentClass;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { ...rest } = props;

  const history = useHistory();

  const isAuthenticated = localStorage.getItem('Meteor.loginToken');

  React.useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
    }
  }, []);

  return isAuthenticated ? (
    <Route exact={props.exact} path={props.path} component={props.component} {...rest} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
