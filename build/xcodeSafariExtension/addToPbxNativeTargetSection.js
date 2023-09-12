"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function addToPbxNativeTargetSection(proj, { extensionName, targetUuid, productFile, xCConfigurationList, }) {
    const target = {
        uuid: targetUuid,
        pbxNativeTarget: {
            isa: "PBXNativeTarget",
            name: extensionName,
            productName: extensionName,
            productReference: productFile.fileRef,
            productType: (0, utils_1.quoted)("com.apple.product-type.app-extension"),
            buildConfigurationList: xCConfigurationList.uuid,
            buildPhases: [],
            buildRules: [],
            dependencies: [],
        },
    };
    proj.addToPbxNativeTargetSection(target);
    return target;
}
exports.default = addToPbxNativeTargetSection;
