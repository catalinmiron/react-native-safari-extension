import { XcodeProject } from "@expo/config-plugins";
import { PBXFile } from "../utils";
export default function addToPbxNativeTargetSection(proj: XcodeProject, { extensionName, targetUuid, productFile, xCConfigurationList, }: {
    extensionName: string;
    targetUuid: string;
    productFile: PBXFile;
    xCConfigurationList: any;
}): {
    uuid: string;
    pbxNativeTarget: {
        isa: string;
        name: string;
        productName: string;
        productReference: any;
        productType: string;
        buildConfigurationList: any;
        buildPhases: never[];
        buildRules: never[];
        dependencies: never[];
    };
};
