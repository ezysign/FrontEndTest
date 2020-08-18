import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, logged, setLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!logged) {
          return <Redirect to='/login' />;
        } else {
          return <Component {...props} logged={logged} setLogged={setLogged} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
