import { ExportedConfig, InfoPlist } from "@expo/config-plugins";

export function getSafariExtensionEntitlements(
  iosConfig: ExportedConfig["ios"]
) {
  const appBundleIdentifier = iosConfig?.bundleIdentifier;

  const entitlements: InfoPlist = {
    "com.apple.developer.parent-application-identifiers": [
      `$(AppIdentifierPrefix)${appBundleIdentifier}`,
    ],
  };

  const appattestKey = 'com.apple.developer.devicecheck.appattest-environment';

  if (iosConfig?.entitlements?.[appattestKey]) {
    entitlements[appattestKey] = iosConfig.entitlements[appattestKey];
  }
  iosConfig?.associatedDomains &&
    (entitlements["com.apple.developer.associated-domains"] =
      iosConfig.associatedDomains);

  return entitlements;
}