import fetch from "node-fetch";

const getData = async (link, user) => {
  let response = await fetch(link, {
    method: "POST",
    body: { user },
  });
  return response;
};

export { getData };
