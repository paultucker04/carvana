import React from "react";
import { AppBar, Button, Grid, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
import { logout } from "./../../services/AuthService";
import { useHistory } from "react-router";

export default function NavHeader() {
  const location = useLocation();

  // initalize tabs to current path
  const [navState, setNavState] = React.useState(location.pathname);

  function handleChange(e, newValue) {
    setNavState(newValue);
  }

  const history = useHistory();

  const logoutHandler = () => {
    logout()
      .then((res) => {
        localStorage.removeItem("token");
        history.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AppBar position="static">
      <Grid container>
        <Grid item xs={11}>
          <Tabs
            value={navState}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Search" value="/cars" to="/cars" component={Link} />
            <Tab
              label="Sell/Trade"
              value="/sell-trade"
              to="/sell-trade"
              component={Link}
            />
            <Tab
              label="Financing"
              value="/financing"
              to="/financing"
              component={Link}
            />
          </Tabs>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
