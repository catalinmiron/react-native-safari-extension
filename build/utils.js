"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFolderRecursive = exports.quoted = void 0;
const util = __importStar(require("util"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function quoted(str) {
    return util.format(`"%s"`, str);
}
exports.quoted = quoted;
async function copyFolderRecursive(src, dest) {
    await fs_1.default.promises.mkdir(dest, { recursive: true });
    const files = await fs_1.default.promises.readdir(src);
    for (const file of files) {
        const srcFile = path_1.default.join(src, file);
        const destFile = path_1.default.join(dest, file);
        const stats = await fs_1.default.promises.stat(srcFile);
        if (stats.isFile()) {
            await fs_1.default.promises.copyFile(srcFile, destFile);
        }
        else if (stats.isDirectory()) {
            await copyFolderRecursive(srcFile, destFile);
        }
    }
}
exports.copyFolderRecursive = copyFolderRecursive;
