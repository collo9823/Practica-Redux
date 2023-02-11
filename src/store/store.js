import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})


/* Proveer el store a todo el reat */