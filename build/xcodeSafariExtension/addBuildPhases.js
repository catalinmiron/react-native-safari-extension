"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
function addBuildPhases(proj, { groupName, productFile, targetUuid, extensionName, iosRoot, }) {
    const buildPath = (0, utils_1.quoted)("");
    // Sources build phase
    const { uuid: sourcesBuildPhaseUuid } = proj.addBuildPhase([`${extensionName}/SafariWebExtensionHandler.swift`], "PBXSourcesBuildPhase", groupName, targetUuid, "app_extension", buildPath);
    // Copy files build phase
    const { uuid: copyFilesBuildPhaseUuid } = proj.addBuildPhase([productFile.path], "PBXCopyFilesBuildPhase", groupName, proj.getFirstTarget().uuid, "app_extension", buildPath);
    // Frameworks build phase
    const { uuid: frameworksBuildPhaseUuid } = proj.addBuildPhase([], "PBXFrameworksBuildPhase", groupName, targetUuid, "app_extension", buildPath);
    const resources = fs_1.default
        .readdirSync(path_1.default.join(iosRoot, extensionName, "Resources"))
        .map((file) => {
        return `${extensionName}/Resources/${file}`;
    });
    // Resources build phase
    const { uuid: resourcesBuildPhaseUuid } = proj.addBuildPhase(resources, "PBXResourcesBuildPhase", groupName, targetUuid, "app_extension", buildPath);
}
exports.default = addBuildPhases;
