import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";

import "./login.scss";

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });

  const appState = props.appState;
  const setAppState = props.setAppState;

  const url = "https://reqres.in/api/login";

  const login = () => {
    setAppState({
      loading: true,
      logged: false,
      msg: appState.msg,
    });

    fetch(url, {
      method: "POST",
      body: { user },
    }).then((response) => {
      if (response.status === 200) {
        setAppState({
          loading: false,
          logged: true,
          msg: "",
        });
      } else {
        setAppState({
          loading: false,
          logged: false,
          msg: "Missing/Incorrect Email or Password",
        });
      }
    });
  };

  module.exports = login;

  return (
    <div className="panel">
      <div className="login">
        Log In
        <div className="error">{appState.msg}</div>
        <TextField
          className="input"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          disabled={appState.loading ? true : false}
          size="small"
          onChange={(e) => {
            setUser({ email: e.target.value, password: user.passowd });
          }}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="password"
          type="password"
          variant="outlined"
          disabled={appState.loading ? true : false}
          size="small"
          onChange={(e) => {
            setUser({ email: user.email, password: e.target.value });
          }}
        />
        <div className="buttons">
          <NavLink className="link" exact to={process.env.PUBLIC_URL + "/"}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setAppState({
                  loading: true,
                  logged: false,
                  msg: "",
                });
              }}
            >
              Back
            </Button>
          </NavLink>
          <NavLink
            className="link"
            exact
            to={
              appState.logged
                ? process.env.PUBLIC_URL + "/home"
                : process.env.PUBLIC_URL + "/login"
            }
          >
            <Button variant="contained" color="primary" onClick={login}>
              Log In
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
