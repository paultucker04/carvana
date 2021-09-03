import { httpResponseStatusHandler } from "./Helper";

const isLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

const login = async (email, password) => {
  return fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(httpResponseStatusHandler);
};

const logout = () => {
  return fetch("http://localhost:8000/api/logout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then(httpResponseStatusHandler);
};

const register = (body) => {
  return fetch("http://localhost:8000/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  }).then(httpResponseStatusHandler);
};

export { isLoggedIn, login, logout, register };
