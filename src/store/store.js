import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter'
import {pokemonSlice} from './slices/pokemons'
import {baseApi} from './apis'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,


        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi.middleware)
})


/* Proveer el store a todo el reat */