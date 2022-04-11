import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import controlSystemConnectionReducer, {
    setControlSystemOnline,
} from "../state/controlSystemConnection";
import crestron from "../plugins/crestron";

const store = configureStore({
    reducer: {
        controlSystemConnection: controlSystemConnectionReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default crestron(store, {
    actions: { setControlSystemOnline },
});
