import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import appConfigReducer from "./features/appConfig/AppSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    appConfig: appConfigReducer,
  },
});
