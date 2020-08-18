import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, createStyles, makeStyles, Grid, Container, Button, Box, Paper, Typography, } from '@material-ui/core'
import {Redirect, useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '3%',
      display: 'flex',
      flex: 1,
      height: '100%'
    },
    loginPanel: {
      margin: '0 auto',
      marginRight: 'auto',
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      justify: 'center'
    },
    textField: {
      textAlign: 'center'
    },
    loginButton: {
      marginTop: '5%'
    },
    spacing: {
      height: '10%'
    }
  })
)

function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState(null);
  const { control, handleSubmit, errors } = useForm({
    mode: 'onChange'
  })

  const handleLogin = async (data) => {
    const {email,password} = data
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }
    await fetch('https://reqres.in/api/login',requestOptions)
    .then (res => res.json())
    .then(data => {localStorage.setItem('token' , data.token)
    if (data.token){
      history.replace("/home")
    }
  }).catch(error => {
    setError({errorMessage: error})
  })
  }


  return (
    <Container maxWidth={false} style={{ height: "100%" }}>
      <Container maxWidth="sm" style={{ paddingTop: "3%", }}>
        <Box height='200px' />
        <Paper elevation={2} style={{ margin: "10%" }}>
          <Box flexDirection="column" justifyContent="center" alignItems='center' style={{ padding: "10%" }}>
            <Controller
              as={TextField}
              label="Email"
              fullWidth
              name="email"
              className={classes.textField}
              control={control}
              rules={{
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }}
              error={!!errors.username}
              helperText={
                  errors.username &&
                    (errors.email?.type === 'pattern'
                     ? 'Invalid Email format'
                     : 'Please enter registered email')
              }
              defaultValue=""
            />
            <Controller
              as={TextField}
              fullWidth
              label='Password'
              name='password'
              type='password'
              control={control}
              className={classes.textField}
              rules={{
                required: 'Please enter password',
              }}
              error={!!errors.password}
              helperText={errors.password?.message}
              defaultValue=''
            />
            <Box display="flex" justifyContent="center">
            {error && <Typography variant='body1' color='error'>{error.toString()}</Typography> }
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button fullWidth variant='contained' className={classes.loginButton} onClick={handleSubmit(handleLogin)}>Login</Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Container>
  )
}

export default Login;
