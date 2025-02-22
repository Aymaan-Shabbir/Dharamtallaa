import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItems: (state, action) => {
      // Remove item based on payload (id or index)
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1); // Remove only one occurrence
      }
      //a new array will be created excluding that product id
    },
    clearItems: (state) => {
      state.cartItems = []; // Clears the entire cart
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItems, clearItems } = cartSlice.actions;
