import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Login from '../pages/LoginPage/Login';
import ProtectedRoute from './ProtectedRoute';

function Content() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/home' component={Home} logged={logged} setLogged={setLogged} />
        <Route
          exact
          path='/login'
          render={(props) => <Login {...props} logged={logged} setLogged={setLogged} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Content;
