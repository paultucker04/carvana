import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Modal,
  Paper,
  TextField,
} from "@material-ui/core";

import React from "react";
import { useState } from "react";
import { createCar } from "../../services/CarsService";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
  },
  container: {
    marginTop: theme.spacing(4),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AddCar({ open, onClose }) {
  const dispatch = useDispatch();
  const { addCar } = bindActionCreators(actionCreators, dispatch);

  const [formInput, setFormInput] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    miles: "",
    image: "",
  });

  const handleSubmit = () => {
    console.log(formInput);
    createCar(formInput).then((data) => {
      addCar(data);
    });
  };

  const classes = useStyles();
  return (
    <Modal open={open} onClose={onClose}>
      <Grid container justifyContent="center" className={classes.container}>
        <Grid item xs={10} xl={4}>
          <Card>
            <CardHeader
              className={classes.header}
              title="Add New Car"
              color="primary"
            />
            <CardContent>
              <form>
                <TextField
                  className={classes.formField}
                  variant="filled"
                  fullWidth
                  label="Make"
                  value={formInput.make}
                  onChange={(e) =>
                    setFormInput({ ...formInput, make: e.target.value })
                  }
                ></TextField>
                <TextField
                  className={classes.formField}
                  variant="filled"
                  fullWidth
                  label="Model"
                  value={formInput.model}
                  onChange={(e) =>
                    setFormInput({ ...formInput, model: e.target.value })
                  }
                ></TextField>
                <TextField
                  className={classes.formField}
                  variant="filled"
                  fullWidth
                  label="Year"
                  type="number"
                  value={formInput.year}
                  onChange={(e) => {
                    setFormInput({
                      ...formInput,
                      year: e.target.value,
                    });
                    console.log(typeof e.target.value);
                  }}
                ></TextField>
                <TextField
                  className={classes.formField}
                  variant="filled"
                  fullWidth
                  label="Price"
                  type="number"
                  value={formInput.price}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      price: e.target.value,
                    })
                  }
                ></TextField>
                <TextField
                  className={classes.formField}
                  variant="filled"
                  fullWidth
                  label="Miles"
                  type="number"
                  value={formInput.miles}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      miles: e.target.value,
                    })
                  }
                ></TextField>
                <TextField
                  className={classes.formField}
                  variant="filled"
                  fullWidth
                  label="Image URL"
                  value={formInput.image}
                  onChange={(e) =>
                    setFormInput({ ...formInput, image: e.target.value })
                  }
                ></TextField>
              </form>
              <Paper variant="outlined">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
                <img alt="&nbsp;No image found" src={formInput.image} />
              </Paper>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                type="button"
                color="secondary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Modal>
  );
}
