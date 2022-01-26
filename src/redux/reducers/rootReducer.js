import { combineReducers } from "redux";
import { continentsReducer } from "./continentsReducer";
import { countriesReducer } from "./countriesReducer";
import { citiesReducer } from "./citiesReducer";

export const rootReducer = combineReducers({
    continentsReducer,
    countriesReducer,
    citiesReducer
})