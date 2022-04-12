import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative,
    isCrestronTouchscreen,
    subscribeState,
} from "@crestron/ch5-crcomlib";
import eruda from "eruda";
import { Store } from "redux";
import CrestronCH5 from "@norgate-av/crestron-ch5-helper";
import debounce from "../../../utils/debounce";

function setupControlSystem(
    store: Store,
    options: IControlSystemOptions,
): Store {
    if (isCrestronTouchscreen()) {
        (window as any).bridgeReceiveIntegerFromNative =
            bridgeReceiveIntegerFromNative;
        (window as any).bridgeReceiveBooleanFromNative =
            bridgeReceiveBooleanFromNative;
        (window as any).bridgeReceiveStringFromNative =
            bridgeReceiveStringFromNative;
        (window as any).bridgeReceiveObjectFromNative =
            bridgeReceiveObjectFromNative;

        if (process.env.REACT_APP_ENV !== "production") {
            eruda.init({
                autoScale: false,
                defaults: {
                    theme: "Dracula",
                },
            });

            eruda.scale(1.5);
        }
    }

    const onControlSystemOnlineStateChanged = debounce((value: boolean) => {
        store.dispatch(options.actions.setControlSystemOnline(value));
    }, 500);

    subscribeState(
        CrestronCH5.SignalType.Digital,
        CrestronCH5.ReservedJoin.Digital.State
            .Csig_All_Control_Systems_Online_fb,
        (value: boolean) => {
            onControlSystemOnlineStateChanged(value);
        },
    );

    return store;
}

export default setupControlSystem;
