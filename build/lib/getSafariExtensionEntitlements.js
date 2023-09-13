"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSafariExtensionEntitlements = void 0;
function getSafariExtensionEntitlements(iosConfig) {
    var _a;
    const appBundleIdentifier = iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.bundleIdentifier;
    const entitlements = {
        "com.apple.developer.parent-application-identifiers": [
            `$(AppIdentifierPrefix)${appBundleIdentifier}`,
        ],
    };
    const appattestKey = 'com.apple.developer.devicecheck.appattest-environment';
    if ((_a = iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.entitlements) === null || _a === void 0 ? void 0 : _a[appattestKey]) {
        entitlements[appattestKey] = iosConfig.entitlements[appattestKey];
    }
    (iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.associatedDomains) &&
        (entitlements["com.apple.developer.associated-domains"] =
            iosConfig.associatedDomains);
    return entitlements;
}
exports.getSafariExtensionEntitlements = getSafariExtensionEntitlements;
