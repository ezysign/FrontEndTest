import React from 'react';
import { BrowserRouter as BaseRoute, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Login, Error, Lists } from '../pages';
import { useSelector } from 'react-redux';


const Navigation = () => {


    const { user } = useSelector(state => state.user);


    return (

        <React.Fragment>
            <BaseRoute>
                <Switch>

                    <Route path="/login">
                        {user ? <Redirect to="/" /> : <Login />}
                    </Route>

                    <Route path="/" exact>
                        {user == null ? <Redirect to="/login" /> : <Home />}
                    </Route>

                    <Route path="/lists">
                        {user == null ? <Redirect to="/login" /> : <Lists />}
                    </Route>


                    <Route component={Error} />
                </Switch>
            </BaseRoute>
        </React.Fragment>
    )

}
export default Navigation;