import { createSlice } from "@reduxjs/toolkit"
import { login } from "./../../api/authApi/authApi";
import { registration } from './../../api/authApi/authApi';





export const  authSlice = createSlice({
    name: "auth",
    initialState: {
        data: [],
        error:null,
        succsess:null
    },

    reducers: {},
     extraReducers: builder => {
         builder.addCase(registration.rejected, (state, action)=> {
            console.log(action.payload)
                    state.error = action.payload
                })
                builder.addCase(registration.fulfilled, (state, action)=> {
                    state.succsess = action.payload
                })
                 builder.addCase(login.fulfilled, (state, action)=> {
                    state.succsess = action.payload
                })
                builder.addCase(login.rejected, (state, action)=> {
                    state.succsess = action.payload
                })
            }
            
})

export default authSlice.reducer