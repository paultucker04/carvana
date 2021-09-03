const { httpResponseStatusHandler } = require("./Helper");

const getAllCars = async () => {
  return await fetch("http://localhost:8000/api/cars", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(httpResponseStatusHandler)
    .then((data) => {
      console.log(data);
      return data;
    });
};

const createCar = async (body) => {
  return await fetch("http://localhost:8000/api/cars", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  })
    .then(httpResponseStatusHandler)
    .then((data) => {
      console.log(data);
      return data;
    });
};

export { getAllCars, createCar };
