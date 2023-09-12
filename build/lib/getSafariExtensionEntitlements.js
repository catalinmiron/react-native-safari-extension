"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSafariExtensionEntitlements = void 0;
function getSafariExtensionEntitlements(iosConfig) {
    const appBundleIdentifier = iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.bundleIdentifier;
    const entitlements = {
        "com.apple.developer.parent-application-identifiers": [
            `$(AppIdentifierPrefix)${appBundleIdentifier}`,
        ],
    };
    (iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.associatedDomains) &&
        (entitlements["com.apple.developer.associated-domains"] =
            iosConfig.associatedDomains);
    return entitlements;
}
exports.getSafariExtensionEntitlements = getSafariExtensionEntitlements;
