import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import HeaderDropdown from "./HeaderDropdown";

const howItWorksMenu = [
  {
    text: "Buying from carvana",
    link: "/buying-a-car-online-how-it-works",
  },
  {
    text: "Selling or trading in",
    link: "/selling-or-trading-in",
  },
  {
    text: "Certified cars",
    link: "/certified-cars",
  },
  {
    text: "Referral Program",
    link: "/referral",
  },
];

const aboutMenu = [
  {
    text: "About us",
    link: "/about",
  },
  {
    text: "Vehicle Protection",
    link: "/vehcile-protection",
  },
  {
    text: "Customer Reviews",
    link: "/reviews",
  },
  {
    text: "Careers",
    link: "/careers",
  },
];

const supportMenu = [
  {
    text: "Contact us",
    link: "/contact-us",
  },
];

export default function HelpHeader() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container spacing={3} justifyContent="flex-end">
            <Grid item xs={2}>
              <HeaderDropdown
                buttonText="How it works"
                menuItems={howItWorksMenu}
              />
            </Grid>
            <Grid item xs={2}>
              <HeaderDropdown
                buttonText="About Carvana"
                menuItems={aboutMenu}
              />
            </Grid>
            <Grid item xs={1}>
              <HeaderDropdown buttonText="Support" menuItems={supportMenu} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
