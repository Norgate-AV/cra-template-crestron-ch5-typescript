import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { applyReduxPlugins } from "../plugins";
import controlSystemReducer from "../state/controlSystem";
import webXPanelReducer from "../state/webXPanel";

const store = configureStore({
    reducer: {
        controlSystem: controlSystemReducer,
        webXPanel: webXPanelReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default applyReduxPlugins(store);
