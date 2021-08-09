import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductDetail/productSlice";
import messageReducer from "../components/Message/messageSlice";
import useReducer from "./userSlice";

const rootReducer = {
  products: productReducer,
  messages: messageReducer,
  user: useReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
