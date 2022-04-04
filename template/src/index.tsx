import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import {
	bridgeReceiveIntegerFromNative,
	bridgeReceiveBooleanFromNative,
	bridgeReceiveStringFromNative,
	bridgeReceiveObjectFromNative,
	isCrestronTouchscreen,
} from "@crestron/ch5-crcomlib";
import App from "./App";

if (isCrestronTouchscreen()) {
	(window as any).bridgeReceiveIntegerFromNative =
		bridgeReceiveIntegerFromNative;
	(window as any).bridgeReceiveBooleanFromNative =
		bridgeReceiveBooleanFromNative;
	(window as any).bridgeReceiveStringFromNative =
		bridgeReceiveStringFromNative;
	(window as any).bridgeReceiveObjectFromNative =
		bridgeReceiveObjectFromNative;
}

const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
);
