import fetch from "node-fetch";

const getData = (link, num, setData) => {
  fetch(link)
    .then((data) => data.json())
    .then((json) => {
      setData({
        color: json.data[num].color,
        id: json.data[num].id,
        name: json.data[num].name,
        pantoneValue: json.data[num].pantoneValue,
        year: json.data[num].year,
        total: json.data.length,
      });
    });
};

export { getData };
