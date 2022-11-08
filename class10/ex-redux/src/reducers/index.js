// Get all reducers in a single file
import { combineReducers } from "redux";
import { reducerCount } from "./reducerCount";

export const Reducers = combineReducers({
    counter: reducerCount
});