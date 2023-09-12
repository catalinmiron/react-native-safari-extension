"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToPbxProjectSection(proj, target) {
    proj.addToPbxProjectSection(target);
    // Add target attributes to project section
    if (!proj.pbxProjectSection()[proj.getFirstProject().uuid].attributes
        .TargetAttributes) {
        proj.pbxProjectSection()[proj.getFirstProject().uuid].attributes.TargetAttributes = {};
    }
    proj.pbxProjectSection()[proj.getFirstProject().uuid].attributes.TargetAttributes[target.uuid] = {
        CreatedOnToolsVersion: "13.4.1",
    };
}
exports.default = addToPbxProjectSection;
