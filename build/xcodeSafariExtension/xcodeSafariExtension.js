"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSafariExtensionXcodeTarget = void 0;
const addBuildPhases_1 = __importDefault(require("./addBuildPhases"));
const addPbxGroup_1 = __importDefault(require("./addPbxGroup"));
const addProductFile_1 = __importDefault(require("./addProductFile"));
const addTargetDependency_1 = __importDefault(require("./addTargetDependency"));
const addToPbxNativeTargetSection_1 = __importDefault(require("./addToPbxNativeTargetSection"));
const addToPbxProjectSection_1 = __importDefault(require("./addToPbxProjectSection"));
const addXCConfigurationList_1 = __importDefault(require("./addXCConfigurationList"));
async function addSafariExtensionXcodeTarget(proj, { appName, extensionName, extensionBundleIdentifier, currentProjectVersion, marketingVersion, iosRoot, }) {
    var _a;
    if (((_a = proj.getFirstProject().firstProject.targets) === null || _a === void 0 ? void 0 : _a.length) > 1)
        return true;
    const targetUuid = proj.generateUuid();
    const groupName = "Embed Safari Extensions";
    const xCConfigurationList = (0, addXCConfigurationList_1.default)(proj, {
        extensionBundleIdentifier,
        currentProjectVersion,
        marketingVersion,
        extensionName,
        appName,
    });
    const productFile = (0, addProductFile_1.default)(proj, extensionName, groupName);
    const target = (0, addToPbxNativeTargetSection_1.default)(proj, {
        extensionName,
        targetUuid,
        productFile,
        xCConfigurationList,
    });
    (0, addToPbxProjectSection_1.default)(proj, target);
    (0, addTargetDependency_1.default)(proj, target);
    (0, addBuildPhases_1.default)(proj, {
        groupName,
        productFile,
        targetUuid,
        extensionName,
        iosRoot,
    });
    (0, addPbxGroup_1.default)(proj, { extensionName });
    return true;
}
exports.addSafariExtensionXcodeTarget = addSafariExtensionXcodeTarget;
