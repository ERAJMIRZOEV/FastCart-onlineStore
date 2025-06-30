import axios from "axios"
import { API } from "../../utils/config"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getToken, saveToken } from "../../utils/token"



export const registration = createAsyncThunk('auth/registration', 
    async (user) => {
        try {
            const { data } = await axios.post(`${API}/Account/register`,user)
            return data.data
            
        } catch (error) {
           console.log(error) 
        }
    }
)

export const login = createAsyncThunk('auth/login', 
    async (user) => {
        try {
            const { data } = await axios.post(`${API}/Account/login`,user)
           saveToken(data.data)
           console.log(data.data)
            return data.data
            
        } catch (error) {
           console.log(error) 
        }
    }
)

