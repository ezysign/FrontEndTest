import React from "react";

import {  Switch, Route, Redirect } from "react-router-dom";

import { Flex } from "../../@ui/Flex";

import HomeWrapper from "./Auht.style";
import Login from "./Login/Login"
const Auth = () => {

  return (
    <HomeWrapper>
      <Flex>
        <div className="home__left">
          <div className="home__text">
            <h1 className="text--light">Hi</h1>
            <h1 className="text--light">Hello</h1>
            <span>FrontEnd Test</span>
          
          </div>
        </div>
        <div className="home__right">
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </Flex>
    </HomeWrapper>
  );
};

export default Auth;
