import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import {
  Route,
  Switch,
  useHistory,
  matchPath,
  useLocation,
} from "react-router";
import Cars from "./components/cars/Cars";
import Header from "./components/header/Header";
import PrivateRoute from "./components/helper/PrivateRoute";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import SellTrade from "./components/sell_trade/SellTrade";
import { ToastContainer } from "react-toastify";

// Theres a bug with reacts material-ui library that has issues with strict mode. This
// is so we dont have to disable the entire apps strict mode
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { isLoggedIn } from "./services/AuthService";

function App() {
  const history = useHistory();
  const location = useLocation();

  console.log(matchPath(location.pathname, { path: "/", exact: true }));
  if (matchPath(location.pathname, { path: "/", exact: true })) {
    const isLoggedIn_ = isLoggedIn();
    if (isLoggedIn_) {
      history.push("/cars");
    } else {
      history.push("/login");
    }
  }

  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeProvider theme={createTheme()}>
        <Grid
          container
          justifyContent="center"
          style={{ backgroundColor: "rgb(228, 236, 240)", height: "100%" }}
        >
          <Grid
            item
            xl={8}
            style={{ backgroundColor: "white", height: "100%" }}
          >
            <ToastContainer position="top-center" theme="colored" />
            <Header></Header>
            <Switch>
              <Route path="/register" component={Register}></Route>
              <Route path="/login" component={Login}></Route>

              <PrivateRoute path="/cars" component={Cars} />
              <PrivateRoute path="/sell-trade" component={SellTrade} />
            </Switch>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
