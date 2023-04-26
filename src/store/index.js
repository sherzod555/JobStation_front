import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { alertReducers } from "./Alert";

const rootReducer = combineReducers({
    alert: alertReducers
})

export const store = configureStore({
    reducer: rootReducer
})