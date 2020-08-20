import React from "react";
import ReactDOm from "react";
import { BrowserRouter } from "react-router-dom";

import LandingPage from "../LandingPage";

import { render, fireEvent } from "@testing-library/react";

test("render the correct contemt", () => {
  const { getByText } = render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );

  getByText("Get Started");
});
