import React from "react";
import { shallow } from "enzyme";
import Button from "@material-ui/core";

import { increment, decrement } from "./home";

it("should increment the num value by 1 until it gets to 6 and it reset to 0", () => {
  const tree = shallow(<Button handleClick={increment} />);

  tree.simulate("click");
  expect(5).toEqual(0);
});

it("should decrement the num value by 1 until it gets to 0 and it reset to 6", () => {
  const tree = shallow(<Button handleClick={decrement} />);

  tree.simulate("click");
  expect(2).toEqual(1);
});
