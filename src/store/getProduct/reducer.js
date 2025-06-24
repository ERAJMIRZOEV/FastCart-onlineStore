import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const api = 'http://37.27.29.18:8002/'

export const getProd = createAsyncThunk('getProd/getProd', 
    async () => {
        try {
            const { data } = await axios.get(api + 'Product/get-products')
            return data.data.products
        } catch (error) {
           console.log(error) 
        }
    }
)

export const  getSlice = createSlice({
    name: "getProd",
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