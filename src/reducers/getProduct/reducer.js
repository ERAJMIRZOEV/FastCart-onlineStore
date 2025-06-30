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



export const  getSlice = createSlice({
    name: "products",
    initialState: {
        data2: []
    },

    reducers: {},

     extraReducers: builder => {
            builder.addCase(getProd.fulfilled, (state, action)=> {
                state.data2 = action.payload
            })
        }
})

export default getSlice.reducer
