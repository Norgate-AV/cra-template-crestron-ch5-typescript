import { Store } from "redux";
import { setControlSystemOnline } from "../state/controlSystem";
import controlSystem from "./controlSystem";
import webXPanel from "./webXPanel";
import { getWebXPanelConfig } from "../../utils/crestron";
import {
    setWebXPanelOnline,
    setWebXPanelConfig,
    setWebXPanelVersion,
    setWebXPanelBuildDate,
    setWebXPanelIsActive,
    setWebXPanelWsConnected,
} from "../state/webXPanel";

export const applyReduxPlugins = (store: Store) => {
    controlSystem(store, {
        actions: { setControlSystemOnline },
    });

    webXPanel(store, {
        config: getWebXPanelConfig(),
        actions: {
            setWebXPanelOnline,
            setWebXPanelConfig,
            setWebXPanelVersion,
            setWebXPanelBuildDate,
            setWebXPanelIsActive,
            setWebXPanelWsConnected,
        },
    });

    return store;
};

export default applyReduxPlugins;
