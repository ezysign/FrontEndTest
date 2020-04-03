import React, { useEffect } from 'react'
import { LoginForm } from '../components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Login() {

    const history = useHistory();
    const { user, error } = useSelector(state => state.user);

    useEffect(() => {
        console.log(error)
        if (user != null) {
            history.replace("/")
        }

    }, [user, error]);

    return (
        <React.Fragment>

            <LoginForm />
        </React.Fragment>

    )
}

export default Login;