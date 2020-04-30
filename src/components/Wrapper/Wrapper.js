import React, {  useEffect } from 'react';
import Login from './../Login/Login.js';
import Home from './../Home/Home.js';
import { Route, Switch,Redirect } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import * as cache from './../../helpers/cache.js'


export default function Wrapper() {


    const message = useSelector(state => state.toast.message);
    const history = useHistory();
    const login_status = useSelector(state => state.auth.login_status);


    function showToast(message)
    {
        if (message) {

            if (message.success) {
                toast.success(message.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            else {
                toast.error(message.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }
    }


    useEffect(() => {
        
        showToast(message);

        if (login_status)
        {
            if (history.location.pathname == "/login") {
                window.location="/home";
            }
        }
        else 
        {
            if (history.location.pathname != "/login") {
                window.location="/login";
            }
        }
        

    })

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
          cache.getFromCache()!==null
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
      )



    return (

        <div className="Navbar">
            <ToastContainer />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute path='/home/:page?' component={Home} />
            </Switch>
            

        </div>

    );
}



