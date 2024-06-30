import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.ts";


export const store = configureStore({
  reducer: {
    films: filmsReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

