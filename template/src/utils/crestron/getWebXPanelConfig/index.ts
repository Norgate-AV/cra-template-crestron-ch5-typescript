import { WebXPanelConfigParams } from "@crestron/ch5-webxpanel";
import pkg from "../../../../package.json";

export function getWebXPanelConfig(): Partial<WebXPanelConfigParams> {
    return pkg.crestron.project.web.config;
}

export default getWebXPanelConfig;
