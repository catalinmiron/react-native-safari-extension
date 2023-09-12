import { XcodeProject } from "@expo/config-plugins";
import { PBXFile } from "../utils";
declare type AddBuildPhaseParams = {
    groupName: string;
    productFile: PBXFile;
    targetUuid: string;
    extensionName: string;
    iosRoot: string;
};
export default function addBuildPhases(proj: XcodeProject, { groupName, productFile, targetUuid, extensionName, iosRoot, }: AddBuildPhaseParams): void;
export {};
