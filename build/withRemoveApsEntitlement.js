"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRemoveApsEntitlement = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withRemoveApsEntitlement = (config) => {
    return (0, config_plugins_1.withEntitlementsPlist)(config, (mod) => {
        delete mod.modResults["aps-environment"];
        return mod;
    });
};
exports.withRemoveApsEntitlement = withRemoveApsEntitlement;
