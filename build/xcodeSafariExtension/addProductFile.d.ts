import { XcodeProject } from "@expo/config-plugins";
export default function addProductFile(proj: XcodeProject, extensionName: string, groupName: string): {
    basename: string;
    fileRef: any;
    uuid: any;
    group: string;
    explicitFileType: string;
    settings: {
        ATTRIBUTES: string[];
    };
    includeInIndex: number;
    path: string;
    sourceTree: string;
};
