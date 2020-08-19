import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@material-ui/core";

import "./Landingpage.scss";

export default function Landing() {
  return (
    <div className="lp">
      <NavLink className="link" exact to={process.env.PUBLIC_URL + "/login"}>
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </NavLink>
    </div>
  );
}
