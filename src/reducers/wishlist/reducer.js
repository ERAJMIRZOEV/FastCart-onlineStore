import { createSlice } from "@reduxjs/toolkit";


export const wishlistStore=createSlice({
    name: 'wishlist',
    initialState: {
        items: JSON.parse(localStorage.getItem('wishlist')) || []
    },
    reducers: {
        setWishlist(state, action) {
            state.items = action.payload
            localStorage.setItem('wishlist', JSON.stringify(state.items))
        },

        addWishlist(state, action) {
            state.items.push(action.payload)
            localStorage.setItem('wishlist', JSON.stringify(state.items))
        },

        removefromWishlist(state, action) {
            state.items = state.items.filter((item)=> item.id != action.payload)
            localStorage.setItem('wishlist', JSON.stringify(state.items))
        },

        clearWishlist(state) {
            state.items = []
            localStorage.removeItem('wishlist')
        }
       

    }
})
export const {setWishlist, addWishlist, removefromWishlist, clearWishlist} = wishlistStore.actions
export default wishlistStore.reducer
