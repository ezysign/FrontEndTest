import React from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "../home";
import { getData } from "../data";

import { render, fireEvent, getByTestId } from "@testing-library/react";

test("render the correct contemt", () => {
  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <Home
        appState={{
          loading: false,
          logged: false,
          msg: "",
        }}
      />
    </BrowserRouter>
  );

  getByTestId("data");
  getByText("Log Out");
  getByText("Next");
  getByText("Back");
});
