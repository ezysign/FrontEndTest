import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component : Component,logged, setLogged, ...rest}) => {
  console.log('PR');
  return (
        <Route {...rest} render= {props => {
          if (!logged) {
            return (
              <Redirect to="/login" />
            );
          } else {
            return <Component {...props} logged={logged} setLogged={setLogged} />
          }
        }}
        />
      )
    }

    export default ProtectedRoute