import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosRequest } from "../../utils/axios"
import { API } from "../../utils/config"
import { toast, Toaster } from "sonner";



export const addToCart = createAsyncThunk('cart/addToCart', 
    async (id) => {
        try {
            await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`)
            toast.success("Товар добавлен в корзину")
        } catch (error) {
           toast.error("Ошибка при добавлении в корзину")
        }
    }
)

export const getCart = createAsyncThunk('cart/getCart', 
    async () => {
        try {
            const { data } = await axiosRequest.get(`${API}/Cart/get-products-from-cart`)
            return data.data[0]
        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteCard = createAsyncThunk('cart/deleteCard',
    async (id, {dispatch}) => {
        try {
            await axiosRequest.delete(`${API}/Cart/delete-product-from-cart?id=${id}`)
            dispatch(getCart())
        } catch (error) {
            console.log(error)
        }
        
    }
)

export const deleteAllCards = createAsyncThunk('cart/deleteAllCards',
    async (_, {dispatch})=> {
        try {
            await axiosRequest.delete(`${API}/Cart/clear-cart`)
            dispatch(getCart())
        } catch (error) {
            console.log(error)
        }
    }
)

export const incrementProduct = createAsyncThunk('cart/incrementProduct',
    async(id, {dispatch})=> {
        try {
            await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
            dispatch(getCart())
        } catch (error) {
          console.log(error)  
        }
    }
)

export const decrementProduct = createAsyncThunk('cart/decrementProduct',
    async(id, {dispatch})=> {
        try {
            await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`)
            dispatch(getCart())
        } catch (error) {
          console.log(error)  
        }
    }
)
