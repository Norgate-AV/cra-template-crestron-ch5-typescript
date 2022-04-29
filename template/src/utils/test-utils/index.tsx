import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import controlSystemReducer from "../../redux/state/controlSystem";
import webXPanelReducer from "../../redux/state/webXPanel";

function render(
    ui: React.ReactElement,
    {
        store = configureStore({
            reducer: {
                controlSystem: controlSystemReducer,
                webXPanel: webXPanelReducer,
            },
        }),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
