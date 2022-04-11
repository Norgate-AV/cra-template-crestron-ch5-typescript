import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative,
    isCrestronTouchscreen,
    subscribeState,
} from "@crestron/ch5-crcomlib";
import eruda from "eruda";
import { Store, AnyAction } from "redux";
import CrestronCH5 from "@norgate-av/crestron-ch5-helper";
import debounce from "../../../utils/debounce";

export interface ICrestronOptions {
    actions: {
        setControlSystemOnline: (value: boolean) => AnyAction;
    };
}

function setupCrestron(store: Store, options: ICrestronOptions): Store {
    if (process.env.REACT_APP_ENV !== "production") {
        eruda.init({
            autoScale: false,
            defaults: {
                theme: "Dracula",
            },
        });

        eruda.scale(1.5);
    }

    if (isCrestronTouchscreen()) {
        (window as any).bridgeReceiveIntegerFromNative =
            bridgeReceiveIntegerFromNative;
        (window as any).bridgeReceiveBooleanFromNative =
            bridgeReceiveBooleanFromNative;
        (window as any).bridgeReceiveStringFromNative =
            bridgeReceiveStringFromNative;
        (window as any).bridgeReceiveObjectFromNative =
            bridgeReceiveObjectFromNative;

        const onControlSystemOnlineStateChanged = debounce((value: boolean) => {
            store.dispatch(options.actions.setControlSystemOnline(value));
        }, 500);

        subscribeState(
            CrestronCH5.SignalType.Boolean,
            CrestronCH5.ReservedJoin.Digital.State
                .Csig_All_Control_Systems_Online_fb,
            (value: boolean) => {
                onControlSystemOnlineStateChanged(value);
            },
        );
    }

    return store;
}

export default setupCrestron;
