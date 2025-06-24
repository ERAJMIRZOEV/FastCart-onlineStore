import { configureStore } from "@reduxjs/toolkit";
import categoriaReducer from './category/reducer'
import  getSlice  from "./getProduct/reducer";

export const store = configureStore({
    reducer: {
        categoria: categoriaReducer,
        getProduct: getSlice
    }
})

export default store