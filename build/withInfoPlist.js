"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInfoPlist = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const plist_1 = __importDefault(require("@expo/plist"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const utils_1 = require("./utils");
const withInfoPlist = (config, { folderName }) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        async (config) => {
            const extensionRootPath = path.join(config.modRequest.projectRoot, folderName);
            const extensionFilePath = path.join(extensionRootPath, "Info.plist");
            const extensionPlist = {
                NSExtension: {
                    NSExtensionPointIdentifier: "com.apple.Safari.web-extension",
                    NSExtensionPrincipalClass: "$(PRODUCT_MODULE_NAME).SafariWebExtensionHandler",
                },
            };
            extensionPlist.CFBundleName = "$(PRODUCT_NAME)";
            extensionPlist.CFBundleDisplayName = "Extension";
            extensionPlist.CFBundleIdentifier = "$(PRODUCT_BUNDLE_IDENTIFIER)";
            extensionPlist.CFBundleVersion = "$(CURRENT_PROJECT_VERSION)";
            extensionPlist.CFBundleExecutable = "$(EXECUTABLE_NAME)";
            extensionPlist.CFBundlePackageType = "$(PRODUCT_BUNDLE_PACKAGE_TYPE)";
            extensionPlist.CFBundleShortVersionString = "$(MARKETING_VERSION)";
            await fs.promises.mkdir(path.dirname(extensionFilePath), {
                recursive: true,
            });
            await fs.promises.writeFile(extensionFilePath, plist_1.default.build(extensionPlist));
            await (0, utils_1.copyFolderRecursive)(path.join(path.resolve(config.modRequest.projectRoot), folderName), path.join(path.resolve(config.modRequest.platformProjectRoot), folderName));
            return config;
        },
    ]);
};
exports.withInfoPlist = withInfoPlist;
