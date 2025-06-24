import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const api = 'http://37.27.29.18:8002/'

export const get = createAsyncThunk('categoriaSlice/get', 
    async () => {
        try {
            const { data } = await axios.get(api + 'Category/get-categories')
            return data.data
        } catch (error) {
           console.log(error) 
        }
    }
)

export const  CategoriaSlice = createSlice({
    name: "categoriaSlice",
    initialState: {
        data: []
    },
    reducers: {},

     extraReducers: builder => {
            builder.addCase(get.fulfilled, (state, action)=> {
                state.data = action.payload
            })
        }
})

export default CategoriaSlice.reducer