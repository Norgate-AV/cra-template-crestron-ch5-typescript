import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface IControlSystemConnection {
    online: boolean;
}

const initialState: IControlSystemConnection = {
    online: false,
};

export const controlSystemConnectionSlice = createSlice({
    name: "controlSystemConnection",
    initialState,
    reducers: {
        setControlSystemOnline: (
            state: IControlSystemConnection,
            action: PayloadAction<boolean>,
        ) => {
            state.online = action.payload;
            console.log(
                `Control System ${state.online ? "Online" : "Offline"}`,
            );
        },
    },
});

export const { setControlSystemOnline } = controlSystemConnectionSlice.actions;

export const selectControlSystemConnection = (state: RootState) =>
    state.controlSystemConnection;
export const selectControlSystemOnline = (state: RootState) =>
    state.controlSystemConnection.online;

export default controlSystemConnectionSlice.reducer;
