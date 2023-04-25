import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore } from 'redux-persist';

import cartSlice from "./slices/cart-slice";
import signoutReducer from "./slices/signout";
import userReducer from "./slices/user";

const reducers = combineReducers({
  user: userReducer,
  signout: signoutReducer,
  cart: cartSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export let persistor = persistStore(store);

// persistor.purge(["user.error"]);
