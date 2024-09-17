import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cart.push(action.payload)
      
    },
         removeFromCart: (state, action) => {
            state.cart = state.cart.filter((_, index) => index !== action.payload);
          },
          setCart: (state, action) => {
            state.cart = action.payload;
          },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, setCart } = cartSlice.actions

export default cartSlice.reducer
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cart: [], // Initialize cart as an empty array
// };

// export const cartSlice = createSlice({
//   name: 'cartStore',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((_, index) => index !== action.payload);
//     },
//     setCart: (state, action) => {
//       state.cart = action.payload;
//     },
//   },
// });

// // Action creators
// export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

// export default cartSlice.reducer;
