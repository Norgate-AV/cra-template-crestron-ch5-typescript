import { WebXPanelConfigParams } from "@crestron/ch5-webxpanel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface IWebXPanel {
    online: boolean;
    config: Partial<WebXPanelConfigParams>;
    version: string;
    buildDate: string;
    isActive: boolean;
    wsConnected: boolean;
}

const initialState: IWebXPanel = {
    online: false,
    config: {},
    version: "",
    buildDate: "",
    isActive: false,
    wsConnected: false,
};

export const webXPanelSlice = createSlice({
    name: "webXPanel",
    initialState,
    reducers: {
        setWebXPanelOnline: (
            state: IWebXPanel,
            action: PayloadAction<boolean>,
        ) => {
            state.online = action.payload;
            console.log(`WebXPanel ${state.online ? "Online" : "Offline"}`);
        },
        setWebXPanelConfig: (
            state: IWebXPanel,
            action: PayloadAction<Partial<WebXPanelConfigParams>>,
        ) => {
            state.config = action.payload;
            console.log("WebXPanel Config: ", state.config);
        },
        setWebXPanelVersion: (
            state: IWebXPanel,
            action: PayloadAction<string>,
        ) => {
            state.version = action.payload;
            console.log(`WebXPanel Version: ${state.version}`);
        },
        setWebXPanelBuildDate: (
            state: IWebXPanel,
            action: PayloadAction<string>,
        ) => {
            state.buildDate = action.payload;
            console.log(`WebXPanel Build Date: ${state.buildDate}`);
        },
        setWebXPanelIsActive: (
            state: IWebXPanel,
            action: PayloadAction<boolean>,
        ) => {
            state.isActive = action.payload;
            console.log(`WebXPanel isActive: ${state.isActive}`);
        },
        setWebXPanelWsConnected: (
            state: IWebXPanel,
            action: PayloadAction<boolean>,
        ) => {
            state.wsConnected = action.payload;
            console.log(
                `WebXPanel WebSocket ${
                    state.wsConnected ? "Connected" : "Disconnected"
                }`,
            );
        },
    },
});

export const {
    setWebXPanelOnline,
    setWebXPanelConfig,
    setWebXPanelVersion,
    setWebXPanelBuildDate,
    setWebXPanelIsActive,
    setWebXPanelWsConnected,
} = webXPanelSlice.actions;

export const selectWebXPanel = (state: RootState) => state.webXPanel;

export default webXPanelSlice.reducer;
