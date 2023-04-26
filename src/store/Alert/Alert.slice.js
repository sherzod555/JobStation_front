import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const {actions: alertActions, reducer: alertReducers} = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        addAlert: (state, {payload}) => {
            state.push(payload)
        },
        deleteAlert: (state, {payload}) => {
            return state.filter(alert => alert.id !== payload)
        }
    }
})