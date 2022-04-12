import { WebXPanelConfigParams } from "@crestron/ch5-webxpanel";
import { AnyAction } from "redux";

declare global {
    interface IControlSystemOptions {
        actions: {
            setControlSystemOnline: (value: boolean) => AnyAction;
        };
    }

    interface IWebXPanelOptions {
        config: Partial<WebXPanelConfigParams>;
        actions: {
            setWebXPanelOnline: (value: boolean) => AnyAction;
            setWebXPanelConfig: (
                value: Partial<WebXPanelConfigParams>,
            ) => AnyAction;
            setWebXPanelVersion: (value: string) => AnyAction;
            setWebXPanelBuildDate: (value: string) => AnyAction;
            setWebXPanelIsActive: (value: boolean) => AnyAction;
            setWebXPanelWsConnected: (value: boolean) => AnyAction;
        };
    }
}
