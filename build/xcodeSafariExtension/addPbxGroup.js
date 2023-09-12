"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addPbxGroup(proj, { extensionName }) {
    // Add PBX group
    const { uuid: pbxGroupUuid } = proj.addPbxGroup(["Resources", "Info.plist", "SafariWebExtensionHandler.swift"], extensionName, `../${extensionName}`);
    // Add PBXGroup to top level group
    const groups = proj.hash.project.objects["PBXGroup"];
    if (pbxGroupUuid) {
        Object.keys(groups).forEach(function (key) {
            if (groups[key].name === undefined && groups[key].path === undefined) {
                proj.addToPbxGroup(pbxGroupUuid, key);
            }
        });
    }
}
exports.default = addPbxGroup;
