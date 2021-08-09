import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addInformation: (state, action) => {
      state = action.payload;
      return state;
    },
    updateInformation: (state, action) => {
      state = action.payload;
      return state;
    },
    removeInformation: (state, action) => {
        state = action.payload;
        return state;
      },
  },
});

const { reducer, actions } = user;
export const { addInformation, updateInformation } = actions;
export default reducer;
