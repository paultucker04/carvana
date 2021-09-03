import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
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

function App() {
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
            <BrowserRouter>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <div>home</div>
                </Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>

                <PrivateRoute path="/cars" component={Cars} />
                <PrivateRoute path="/sell-trade" component={SellTrade} />
              </Switch>
            </BrowserRouter>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
