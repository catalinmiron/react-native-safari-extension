"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withXcodeTarget = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const xcodeSafariExtension_1 = require("./xcodeSafariExtension/xcodeSafariExtension");
const withXcodeTarget = (config, { folderName }) => {
    return (0, config_plugins_1.withXcodeProject)(config, (config) => {
        (0, xcodeSafariExtension_1.addSafariExtensionXcodeTarget)(config.modResults, {
            appName: config.modRequest.projectName,
            extensionName: folderName,
            extensionBundleIdentifier: `${config.ios
                .bundleIdentifier}.${folderName}`,
            currentProjectVersion: config.ios.buildNumber || "1",
            marketingVersion: config.version,
            iosRoot: config.modRequest.platformProjectRoot,
        });
        return config;
    });
};
exports.withXcodeTarget = withXcodeTarget;
