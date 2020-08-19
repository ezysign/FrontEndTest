import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Login from '../pages/LoginPage/Login';
import ProtectedRoute from './ProtectedRoute';

function Content() {
  const [logged, setLogged] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Login {...props} logged={logged} setLogged={setLogged} />}
        />
        <Route
          path='/login'
          render={(props) => <Login {...props} logged={logged} setLogged={setLogged} />}
        />
        <ProtectedRoute exact path='/home' component={Home} logged={logged} setLogged={setLogged} />
      </Switch>
    </BrowserRouter>
  );
}

export default Content;
