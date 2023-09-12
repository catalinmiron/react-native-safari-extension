"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withExtensionConfig = void 0;
const getSafariExtensionEntitlements_1 = require("./lib/getSafariExtensionEntitlements");
const withExtensionConfig = (config, { folderName }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    const appBundleIdentifier = (_a = config.ios) === null || _a === void 0 ? void 0 : _a.bundleIdentifier;
    const extensionBundleIdentifier = `${appBundleIdentifier}.${folderName}`;
    let configIndex = null;
    (_g = (_f = (_e = (_d = (_c = (_b = config.extra) === null || _b === void 0 ? void 0 : _b.eas) === null || _c === void 0 ? void 0 : _c.build) === null || _d === void 0 ? void 0 : _d.experimental) === null || _e === void 0 ? void 0 : _e.ios) === null || _f === void 0 ? void 0 : _f.appExtensions) === null || _g === void 0 ? void 0 : _g.forEach((ext, index) => {
        if (ext.targetName === folderName) {
            configIndex = index;
        }
    });
    if (!configIndex) {
        config.extra = {
            ...config.extra,
            eas: {
                ...(_h = config.extra) === null || _h === void 0 ? void 0 : _h.eas,
                build: {
                    ...(_k = (_j = config.extra) === null || _j === void 0 ? void 0 : _j.eas) === null || _k === void 0 ? void 0 : _k.build,
                    experimental: {
                        ...(_o = (_m = (_l = config.extra) === null || _l === void 0 ? void 0 : _l.eas) === null || _m === void 0 ? void 0 : _m.build) === null || _o === void 0 ? void 0 : _o.experimental,
                        ios: {
                            ...(_s = (_r = (_q = (_p = config.extra) === null || _p === void 0 ? void 0 : _p.eas) === null || _q === void 0 ? void 0 : _q.build) === null || _r === void 0 ? void 0 : _r.experimental) === null || _s === void 0 ? void 0 : _s.ios,
                            appExtensions: [
                                ...((_y = (_x = (_w = (_v = (_u = (_t = config.extra) === null || _t === void 0 ? void 0 : _t.eas) === null || _u === void 0 ? void 0 : _u.build) === null || _v === void 0 ? void 0 : _v.experimental) === null || _w === void 0 ? void 0 : _w.ios) === null || _x === void 0 ? void 0 : _x.appExtensions) !== null && _y !== void 0 ? _y : []),
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
        const appClipConfig = config.extra.eas.build.experimental.ios.appExtensions[configIndex];
        appClipConfig.entitlements = {
            ...appClipConfig.entitlements,
            ...(0, getSafariExtensionEntitlements_1.getSafariExtensionEntitlements)(config.ios),
        };
    }
    return config;
};
exports.withExtensionConfig = withExtensionConfig;
