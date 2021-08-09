import { createSlice } from "@reduxjs/toolkit";

const message = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addMessages: (state, action) => {
      state = action.payload;
      return state;
    },
    removeMessages: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = message;
export const { addMessages, removeMessages } = actions;
export default reducer;
