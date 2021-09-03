import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
  },
}));

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const classes = useStyles();

  const history = useHistory();

  function sendRegister() {
    const body = {
      user: {
        name,
        email,
        password,
        confirmPassword,
      },
    };

    console.log("sending");
    fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/login");
      });
  }

  return (
    <Box mt={4}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item lg={4} xl={2}>
          <Card>
            <CardHeader
              className={classes.header}
              title="Register"
              color="primary"
            />
            <CardContent>
              <form className="form">
                <div>
                  <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    type="button"
                    color="primary"
                    onClick={sendRegister}
                  >
                    Register
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
