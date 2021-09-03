import { Box, Fab, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCars } from "../../services/CarsService";
import CarInfoCard from "./CarInfoCard";
import AddCar from "./AddCar";
import { Add } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

export default function Cars() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const { setCars } = bindActionCreators(actionCreators, dispatch);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getData() {
      setCars(await getAllCars());
    }

    getData();
  }, []);

  return (
    <>
      <Box p={3}>
        <Grid container spacing={3} justifyContent="flex-start">
          {cars.map((info) => (
            <Grid key={info.id} item lg={4} xl={2}>
              <CarInfoCard info={info} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Fab onClick={handleOpen} color="primary" aria-label="add">
        <Add />
      </Fab>
      <AddCar open={open} onClose={handleClose} />
    </>
  );
}
