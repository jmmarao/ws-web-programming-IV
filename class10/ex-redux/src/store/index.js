import { configureStore } from "@reduxjs/toolkit";

import { Reducers } from "../reducers"

export const Store = configureStore({
    reducer: Reducers,
});

/* 

Deprecated

import { createStore } from "redux"
import { Reducers } from "../reducers"

export const Store = createStore(Reducers); 

*/