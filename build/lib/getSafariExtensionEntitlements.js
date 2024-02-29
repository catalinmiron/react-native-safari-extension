"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSafariExtensionEntitlements = void 0;
function getSafariExtensionEntitlements(iosConfig) {
    var _a, _b;
    const appBundleIdentifier = iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.bundleIdentifier;
    const entitlements = {
        "com.apple.developer.parent-application-identifiers": [
            `$(AppIdentifierPrefix)${appBundleIdentifier}`,
        ],
        'com.apple.developer.applesignin': true,
    };
    const appattestKey = 'com.apple.developer.devicecheck.appattest-environment';
    const appgroupSecurity = 'com.apple.security.application-groups';
    if ((_a = iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.entitlements) === null || _a === void 0 ? void 0 : _a[appgroupSecurity]) {
        entitlements[appgroupSecurity] = iosConfig.entitlements[appgroupSecurity];
    }
    if ((_b = iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.entitlements) === null || _b === void 0 ? void 0 : _b[appattestKey]) {
        entitlements[appattestKey] = iosConfig.entitlements[appattestKey];
    }
    (iosConfig === null || iosConfig === void 0 ? void 0 : iosConfig.associatedDomains) &&
        (entitlements["com.apple.developer.associated-domains"] =
            iosConfig.associatedDomains);
    return entitlements;
}
exports.getSafariExtensionEntitlements = getSafariExtensionEntitlements;
