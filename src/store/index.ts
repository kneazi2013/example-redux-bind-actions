import { configureStore } from "@reduxjs/toolkit";

import { reducer as homeReducer } from "./home";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export type GState = ReturnType<typeof store.getState>;
