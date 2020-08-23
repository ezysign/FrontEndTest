import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Text from "../input/Input";
import Butt from "../button/Button";
import "./login.scss";
import { getData } from "./data";

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

    let response = getData(url, user);

    if (response === 200) {
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
  };

  return (
    <div className="panel">
      <div className="login">
        <div data-testid="Title">Log In</div>
        <div className="error">{appState.msg}</div>
        <Text
          label="email"
          function={(e) => {
            setUser({ email: user.email, password: e.target.value });
          }}
          type="text"
          loading={appState.loading}
        />
        <Text
          label="Password"
          function={(e) => {
            setUser({ email: user.email, password: e.target.value });
          }}
          type="password"
          loading={appState.loading}
        />
        <div data-testid="button" className="buttons">
          <NavLink className="link" exact to={process.env.PUBLIC_URL + "/"}>
            <Butt
              text="Back"
              onClick={() => {
                setAppState({
                  loading: true,
                  logged: false,
                  msg: "",
                });
              }}
            />
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
            <Butt text="Log In" function={login} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
