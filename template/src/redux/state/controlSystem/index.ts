import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface IControlSystem {
    online: boolean;
}

const initialState: IControlSystem = {
    online: false,
};

export const controlSystemSlice = createSlice({
    name: "controlSystem",
    initialState,
    reducers: {
        setControlSystemOnline: (
            state: IControlSystem,
            action: PayloadAction<boolean>,
        ) => {
            state.online = action.payload;
            console.log(
                `Control System ${state.online ? "Online" : "Offline"}`,
            );
        },
    },
});

export const { setControlSystemOnline } = controlSystemSlice.actions;

export const selectControlSystem = (state: RootState) => state.controlSystem;
export const selectControlSystemOnline = (state: RootState) =>
    state.controlSystem.online;

export default controlSystemSlice.reducer;
