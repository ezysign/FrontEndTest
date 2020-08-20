import fetch from "node-fetch";

const getData = (link, setAppState, user) => {
  fetch(link, {
    method: "POST",
    body: { user },
  }).then((response) => {
    if (response.status === 200) {
      setAppState({
        loading: false,
        logged: true,
        msg: "",
      });
    } else {
      setAppState({
        loading: false,
        logged: false,
        msg: "Missing/Incorrect Email or Password",
      });
    }
  });
};

export { getData };
