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
    // credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(httpResponseStatusHandler);
};

export { isLoggedIn, login };
