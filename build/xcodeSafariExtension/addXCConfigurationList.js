"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function default_1(proj, { extensionBundleIdentifier, currentProjectVersion, marketingVersion, extensionName, appName, }) {
    const commonBuildSettings = {
        ASSETCATALOG_COMPILER_APPICON_NAME: "AppIcon",
        CLANG_ENABLE_MODULES: "YES",
        CODE_SIGN_ENTITLEMENTS: `${appName}/${appName}.entitlements`,
        CURRENT_PROJECT_VERSION: (0, utils_1.quoted)(currentProjectVersion),
        INFOPLIST_FILE: `${extensionName}/Info.plist`,
        MARKETING_VERSION: (0, utils_1.quoted)(marketingVersion),
        PRODUCT_BUNDLE_IDENTIFIER: extensionBundleIdentifier,
        PRODUCT_NAME: (0, utils_1.quoted)(extensionName),
        TARGETED_DEVICE_FAMILY: (0, utils_1.quoted)("1,2"),
        SWIFT_VERSION: "5.0",
        IPHONEOS_DEPLOYMENT_TARGET: "15.0",
        VERSIONING_SYSTEM: "apple-generic",
    };
    const buildConfigurationsList = [
        {
            name: "Debug",
            isa: "XCBuildConfiguration",
            buildSettings: {
                ...commonBuildSettings,
            },
        },
        {
            name: "Release",
            isa: "XCBuildConfiguration",
            buildSettings: {
                ...commonBuildSettings,
            },
        },
    ];
    const xCConfigurationList = proj.addXCConfigurationList(buildConfigurationsList, "Release", `Build configuration list for PBXNativeTarget ${(0, utils_1.quoted)(extensionName)} `);
    return xCConfigurationList;
}
exports.default = default_1;
