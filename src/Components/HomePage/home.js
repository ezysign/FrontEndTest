import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import Butt from "../button/Button";

import { getData } from "./data";
import { increase } from "./increment";
import { decrease } from "./decrement";

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
    total: 0,
  });
  const url = "https://reqres.in/api/unknown";

  const increment = () => {
    let newNum = increase(num, data.total);
    setNum(newNum);
  };

  const decrement = () => {
    let newNum = decrease(num, data.total);
    setNum(newNum);
  };

  useEffect(() => {
    getData(url).then((response) => {
      setData({
        color: response[num].color,
        id: response[num].id,
        name: response[num].name,
        pantoneValue: response[num].pantoneValue,
        year: response[num].year,
        total: response.length,
      });
    });
  }, [num]);

  return (
    <div className="container">
      <div className="Data" data-testid="data">
        <div>Name : {data.name}</div>
        <div data-testid="id">Id : {data.id}</div>
        <div>Pantone Value : {data.pantoneValue}</div>
        <div>Color : {data.color}</div>
        <div>Year : {data.year}</div>

        <div className="buttgroup">
          <Butt text="Back" function={decrement} />
          <Butt text="Next" function={increment} />
        </div>
        <NavLink className="link" exact to={process.env.PUBLIC_URL + "/login"}>
          <Butt
            text="Log Out"
            function={() => {
              setAppState({ loading: false, logged: false, msg: "" });
            }}
          />
        </NavLink>
      </div>
    </div>
  );
}
