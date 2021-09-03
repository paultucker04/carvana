import React from "react";
import { useRouteMatch } from "react-router";
import HelpHeader from "./HelpHeader";
import NavHeader from "./NavHeader";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

export default function Header() {
  // const classes = useStyles();
  const publicPage = useRouteMatch(["/login", "/register"]);

  return (
    <>
      <HelpHeader />
      {!publicPage && <NavHeader />}
    </>
  );
}
