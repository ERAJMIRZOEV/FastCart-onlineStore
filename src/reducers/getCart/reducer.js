import axios from 'axios'

import { API } from '../../utils/config'
import { axiosRequest } from '../../utils/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCart } from '../../api/cartApi/cartApi'




export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: builder=> {
        builder.addCase(getCart.fulfilled, (state, action)=> {
            state.data = action.payload
        })
    }
})

export default cartSlice.reducer
