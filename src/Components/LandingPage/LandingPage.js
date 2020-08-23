import React from "react";
import { NavLink } from "react-router-dom";
import Butt from "../button/Button";

import "./Landingpage.scss";

export default function Landing() {
  return (
    <div className="lp">
      <NavLink className="link" exact to={process.env.PUBLIC_URL + "/login"}>
        <Butt text="Get Started" />
      </NavLink>
    </div>
  );
}
