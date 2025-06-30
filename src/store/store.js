import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../reducers/authSlice/authSlice";
import CategoriaSlice from './../reducers/category/reducer';
import  getProd  from "../reducers/getProduct/reducer";
import cartSlice from "../reducers/getCart/reducer";




export const store = configureStore({
    reducer: {
        auth:authSlice,
        categoria: CategoriaSlice,
        products: getProd,
        cart: cartSlice
    }
})

export default store