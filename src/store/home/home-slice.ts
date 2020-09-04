import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  size: 0,
};

const { actions, reducer } = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.size = state.size + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.size = state.size - action.payload;
    },
  },
});

export { actions, reducer };
