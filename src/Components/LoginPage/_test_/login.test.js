import React from "react";
import ReactDOm from "react";
import { BrowserRouter } from "react-router-dom";

import Login from "../login";

import { render, fireEvent, getByTestId } from "@testing-library/react";

test("render the correct contemt", () => {
  const { getByText, getAllByTestId, getByTestId } = render(
    <BrowserRouter>
      <Login
        appState={{
          loading: true,
          logged: false,
          msg: "",
        }}
      />
    </BrowserRouter>
  );

  getByTestId("Title");
  getByText("Back");
  getByTestId("button");
  getAllByTestId("input");
});
