import { ConfigPlugin } from "@expo/config-plugins";
import { getSafariExtensionEntitlements } from "./lib/getSafariExtensionEntitlements";

export const withExtensionConfig: ConfigPlugin<{
  folderName: string;
}> = (config, { folderName }) => {
  const appBundleIdentifier = config.ios?.bundleIdentifier;
  const extensionBundleIdentifier = `${appBundleIdentifier}.${folderName}`;

  let configIndex: null | number = null;
  config.extra?.eas?.build?.experimental?.ios?.appExtensions?.forEach(
    (ext: any, index: number) => {
      if (ext.targetName === folderName) {
        configIndex = index;
      }
    }
  );

  if (!configIndex) {
    config.extra = {
      ...config.extra,
      eas: {
        ...config.extra?.eas,
        build: {
          ...config.extra?.eas?.build,
          experimental: {
            ...config.extra?.eas?.build?.experimental,
            ios: {
              ...config.extra?.eas?.build?.experimental?.ios,
              appExtensions: [
                ...(config.extra?.eas?.build?.experimental?.ios
                  ?.appExtensions ?? []),
                {
                  targetName: folderName,
                  bundleIdentifier: extensionBundleIdentifier,
                },
              ],
            },
          },
        },
      },
    };
    configIndex = 0;
  }

  if (configIndex != null && config.extra) {
    const appClipConfig =
      config.extra.eas.build.experimental.ios.appExtensions[configIndex];

    appClipConfig.entitlements = {
      ...appClipConfig.entitlements,
      ...getSafariExtensionEntitlements(config.ios),
    };
  }

  return config;
};
