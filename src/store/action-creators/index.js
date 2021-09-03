export const setCars = (carsArray) => {
  return (dispatch) => {
    dispatch({
      type: "SET",
      payload: carsArray,
    });
  };
};

export const addCar = (car) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: car,
    });
  };
};
