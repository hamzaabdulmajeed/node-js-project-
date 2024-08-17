import { combineReducers } from "@reduxjs/toolkit";
import  themeSlice from "./themeSlice"
import  cartSlice from  "./cartSlice"

const rootReducer = combineReducers({
    themeStore: themeSlice,
    cartStore: cartSlice
})

export default rootReducer