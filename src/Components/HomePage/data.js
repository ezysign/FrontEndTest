import fetch from "node-fetch";

const getData = async (link) => {
  const json = await fetch(link);
  const data = await json.json();

  return data.data;
};

export { getData };
