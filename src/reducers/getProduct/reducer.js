import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../../utils/config'

export const getProd = createAsyncThunk('products/getProd', 
    async () => {
        try {
            const { data } = await axios.get(API + '/Product/get-products')
            return data.data.products
        } catch (error) {
           console.log(error) 
        }
    }
)

export const getProductById = createAsyncThunk('products/getProductById', 
    async (id) => {
        try {
            const { data } = await axios.get(API + `/Product/get-product-by-id?id=${id}`)
            return data.data
        } catch (error) {
           console.log(error) 
        }
    }
)




export const  getSlice = createSlice({
    name: "products",
    initialState: {
        data2: [],
        byId: null
    },

    reducers: {},

     extraReducers: builder => {
            builder.addCase(getProd.fulfilled, (state, action)=> {
                state.data2 = action.payload
            }),
            builder.addCase(getProductById.fulfilled, (state, action)=> {
                state.byId = action.payload
            })
        }
})

export default getSlice.reducer
