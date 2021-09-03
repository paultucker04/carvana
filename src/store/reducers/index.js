import { combineReducers } from "redux";
import CarReducer from "./CarReducer";

const reducers = combineReducers({
  cars: CarReducer,
});

export default reducers;
