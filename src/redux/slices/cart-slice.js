import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = +existingItem.quantity * +newItem.price;
      } else {
        state.items.push(newItem);
        newItem.totalPrice = newItem.quantity * +newItem.price;
      }
      state.totalPrice += newItem.price * newItem.quantity;
      state.totalQuantity += newItem.quantity;
    },
    increaseItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * +newItem.price;
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + +newItem.price;
    },
    decreaseItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item._id !== existingItem._id
        );
        state.totalPrice = state.totalPrice - +newItem.price;
      } else {
        existingItem.quantity--;
        state.totalPrice = state.totalPrice - +newItem.price;
      }
      existingItem.totalPrice = existingItem.quantity * +newItem.price;
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
