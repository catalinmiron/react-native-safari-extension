"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTargetDependency(proj, target) {
    if (!proj.hash.project.objects["PBXTargetDependency"]) {
        proj.hash.project.objects["PBXTargetDependency"] = {};
    }
    if (!proj.hash.project.objects["PBXContainerItemProxy"]) {
        proj.hash.project.objects["PBXContainerItemProxy"] = {};
    }
    proj.addTargetDependency(proj.getFirstTarget().uuid, [target.uuid]);
}
exports.default = addTargetDependency;
