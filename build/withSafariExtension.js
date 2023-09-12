"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withExtensionConfig_1 = require("./withExtensionConfig");
const withInfoPlist_1 = require("./withInfoPlist");
const withXcodeTarget_1 = require("./withXcodeTarget");
const withRemoveApsEntitlement_1 = require("./withRemoveApsEntitlement");
// import { withPodfile } from "./withPodfile";
const withSafariExtension = (config, { folderName }) => {
    config = (0, withRemoveApsEntitlement_1.withRemoveApsEntitlement)(config);
    // config = withPodfile(config, { folderName });
    config = (0, withExtensionConfig_1.withExtensionConfig)(config, { folderName });
    config = (0, withInfoPlist_1.withInfoPlist)(config, { folderName });
    config = (0, withXcodeTarget_1.withXcodeTarget)(config, { folderName });
    return config;
};
exports.default = withSafariExtension;
