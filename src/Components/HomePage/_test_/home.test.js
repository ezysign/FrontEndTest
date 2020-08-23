import { increase } from "../increment";
import { decrease } from "../decrement";

const getData = jest.fn(async () => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "cerulean",
          year: 2000,
          color: "#98B2D1",
          pantone_value: "15-4020",
        },
        {
          id: 2,
          name: "fuchsia rose",
          year: 2001,
          color: "#C74375",
          pantone_value: "17-2031",
        },
      ]),
  });
});

test("api calls", async () => {
  let response = await getData("https://reqres.in/api/unknown");
  let data = await response.json();

  expect(data[0].id).toBe(1);
  expect(data[0].name).toBe("cerulean");
  expect(data[1].id).toBe(2);
  expect(data[1].name).toBe("fuchsia rose");
});

test("next button increments index", () => {
  expect(increase(1, 6)).toBe(2);
  expect(increase(5, 6)).toBe(0);
});

test("back button decrements index", () => {
  expect(decrease(1, 6)).toBe(0);
  expect(decrease(0, 6)).toBe(5);
});
