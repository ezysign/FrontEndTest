import React from "react";
import ReactDOm from "react";
import { BrowserRouter } from "react-router-dom";

import Login from "../login";

import { render } from "@testing-library/react";

const getData = jest.fn(async () => {
  return Promise.resolve({
    status: 200,
  });
});

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

test("Successfully Logging in", async () => {
  let response = await getData("https://reqres.in/api/login", {
    email: "asdf@gmail.com",
    password: "1234",
  });

  expect(response.status).toBe(200);
});
