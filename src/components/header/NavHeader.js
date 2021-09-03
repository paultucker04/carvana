import React from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";

export default function NavHeader() {
  const location = useLocation();

  // initalize tabs to current path
  const [navState, setNavState] = React.useState(location.pathname);

  function handleChange(e, newValue) {
    setNavState(newValue);
  }

  return (
    <AppBar position="static">
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
    </AppBar>
  );
}
