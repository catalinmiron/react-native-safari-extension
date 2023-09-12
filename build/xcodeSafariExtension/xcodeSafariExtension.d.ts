import { XcodeProject } from "@expo/config-plugins";
declare type AddXCodeTargetParmas = {
    appName: string;
    extensionName: string;
    extensionBundleIdentifier: string;
    currentProjectVersion: string;
    marketingVersion: string;
    iosRoot: string;
};
export declare function addSafariExtensionXcodeTarget(proj: XcodeProject, { appName, extensionName, extensionBundleIdentifier, currentProjectVersion, marketingVersion, iosRoot, }: AddXCodeTargetParmas): Promise<boolean>;
export {};
