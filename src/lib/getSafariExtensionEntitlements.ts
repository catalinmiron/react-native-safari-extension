import { ExportedConfig, InfoPlist } from "@expo/config-plugins";

export function getSafariExtensionEntitlements(
  iosConfig: ExportedConfig["ios"]
) {
  const appBundleIdentifier = iosConfig?.bundleIdentifier;

  const entitlements: InfoPlist = {
    "com.apple.developer.parent-application-identifiers": [
      `$(AppIdentifierPrefix)${appBundleIdentifier}`,
    ],
    'com.apple.developer.applesignin': true,
  };

  const appattestKey = 'com.apple.developer.devicecheck.appattest-environment';
  const appgroupSecurity = 'com.apple.security.application-groups';

  if (iosConfig?.entitlements?.[appgroupSecurity]) {
    entitlements[appgroupSecurity] = iosConfig.entitlements[appgroupSecurity];
  }

  if (iosConfig?.entitlements?.[appattestKey]) {
    entitlements[appattestKey] = iosConfig.entitlements[appattestKey];
  }
  iosConfig?.associatedDomains &&
    (entitlements["com.apple.developer.associated-domains"] =
      iosConfig.associatedDomains);

  return entitlements;
}
