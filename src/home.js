import React, { useEffect, useState } from "react";

import fetch from "node-fetch";

import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import "./home.scss";

export default function Home(props) {
  const setAppState = props.setAppState;
  const [num, setNum] = useState(0);

  const [data, setData] = useState({
    color: "",
    id: 0,
    name: "",
    pantoneValue: 0,
    year: 0,
    length: 0,
  });
  const url = "https://reqres.in/api/unknown";

  const increment = () => {
    let newNum = (num + 1) % data.total;
    setNum(newNum);
  };

  const decrement = () => {
    let newNum = num - 1;
    if (newNum < 0) {
      newNum = 5;
    }
    setNum(newNum);
  };

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setData({
          color: json.data[num].color,
          id: json.data[num].id,
          name: json.data[num].name,
          pantoneValue: json.data[num].pantoneValue,
          year: json.data[num].year,
          total: json.data.length,
        });
      });
  }, [num]);

  module.export = { increment, decrement };

  return (
    <div className="container">
      <div className="Data">
        <div>Name : {data.name}</div>
        <div>Id : {data.id}</div>
        <div>Pantone Value : {data.pantoneValue}</div>
        <div>Color : {data.color}</div>
        <div>Year : {data.year}</div>

        <div className="buttgroup">
          <Button variant="contained" color="primary" onClick={decrement}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={increment}>
            Next
          </Button>
        </div>
        <NavLink className="link" exact to={process.env.PUBLIC_URL + "/login"}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setAppState({ loading: false, logged: false, msg: "" });
            }}
          >
            Log Out
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
