import { increment, decrement } from "./home";
import { login } from "./login";

describe("Increment list", () => {
  assert({
    given: "a click action and the current number",
    should: "add 1 to the number divide by 6",
    actual: increment(3, click()),
    expected: 4,
  });
});

describe("Increment list", () => {
  assert({
    given: "a click action and the current number",
    should: "add 1 to the number divide by 6",
    actual: increment(5, click()),
    expected: 0,
  });
});

describe("Decrement list", () => {
  assert({
    given: "a click action and the current number",
    should: "minus 1 to the number and it becomes 5 if its < 0",
    actual: increment(3, click()),
    expected: 2,
  });
});

describe("Decrement list", () => {
  assert({
    given: "a click action and the current number",
    should: "minus 1 to the number and it becomes 5 if its < 0",
    actual: increment(0, click()),
    expected: 5,
  });
});

describe("login", () => {
  assert({
    given: "a click action and email / password ",
    should:
      "check with the api if the email and password matches. return 400 if it doesnt, 200 if it does",
    actual: login({ email: "", passowrd: "" }, click()),
    expected: 400,
  });
});

describe("login", () => {
  assert({
    given: "a click action and email / password ",
    should:
      "check with the api if the email and password matches. return 400 if it doesnt, 200 if it does",
    actual: login({ email: "asdfasdf", passowrd: "1234" }, click()),
    expected: 400,
  });
});

describe("login", () => {
  assert({
    given: "a click action and email / password ",
    should:
      "check with the api if the email and password matches. return 400 if it doesnt, 200 if it does",
    actual: login({ email: "asdfasdf", passowrd: "" }, click()),
    expected: 400,
  });
});

describe("login", () => {
  assert({
    given: "a click action and email / password ",
    should:
      "check with the api if the email and password matches. return 400 if it doesnt, 200 if it does",
    actual: login({ email: "", passowrd: "1234" }, click()),
    expected: 400,
  });
});

describe("login", () => {
  assert({
    given: "a click action and email / password ",
    should:
      "check with the api if the email and password matches. return 400 if it doesnt, 200 if it does",
    actual: login({ email: "blahblah@gmail.com", passowrd: "1234" }, click()),
    expected: 200,
  });
});
