import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../model/auth';

const ProtectedRoute = ({ component: Component, logged, setLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.token) {
          return <Redirect to='/login' />;
        } else {
          return <Component {...props} logged={logged} setLogged={setLogged} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
