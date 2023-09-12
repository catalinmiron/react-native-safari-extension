"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addProductFile(proj, extensionName, groupName) {
    const productFile = {
        basename: `${extensionName}.appex`,
        fileRef: proj.generateUuid(),
        uuid: proj.generateUuid(),
        group: groupName,
        explicitFileType: "wrapper.application",
        settings: {
            ATTRIBUTES: ["RemoveHeadersOnCopy"],
        },
        includeInIndex: 0,
        path: `${extensionName}.appex`,
        sourceTree: "BUILT_PRODUCTS_DIR",
    };
    proj.addToPbxFileReferenceSection(productFile);
    proj.addToPbxBuildFileSection(productFile);
    return productFile;
}
exports.default = addProductFile;
