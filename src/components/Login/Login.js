import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {
    Button,CssBaseline,TextField,Typography,Container
} from '@material-ui/core';

import useStyles from './style.js';
import { loginAction } from './../../actions/authActions';
import {Animated} from "react-animated-css";

export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [email_error, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [password_error, setPasswordError] = useState(false);
    
    
    const loading = useSelector(state => state.auth.loading);
   
 

    function handleSubmit(event) {
        event.preventDefault();
        if (email.length==0 || password.length==0) 
        {
            if (email.length==0) setEmailError(true)
            if (password.length==0) setPasswordError(true)
        }
        else 
        {
            dispatch(loginAction({
                email:email,
                password:password
            }));
        }
        
    }
    
    let loginButtonLabel;
    if (loading)
    {
        loginButtonLabel="Please wait...";
    }
    else
    {
        loginButtonLabel="Login";
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Animated animationIn="slideInDown"  isVisible={true} animationInDelay ={10}>
            <div className={classes.form_container}>

                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <TextField
                        className={classes.textField}
                        type="email"
                        id="outlined-error-helper-text"
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        error={email_error}
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={email_error?"Email is required":""}
                    />
                    <TextField
                        className={classes.textField}
                        type="password"
                        id="outlined-error-helper-text"
                        margin="normal"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        error={password_error}
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={email_error?"Password is required":""}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.button}
                        disabled={loading}
                    >
                        {loginButtonLabel}
                    </Button>

                </form>
            </div>
            </Animated>
        </Container>
    );
}