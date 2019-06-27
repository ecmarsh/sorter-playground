"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collections_1 = __importDefault(require("./Collections"));
const Drivable_1 = require("./Drivable");
const drivableCollections = Drivable_1.generateDrivables(Collections_1.default);
function drive(drivables) {
    for (const drivable of drivables) {
        drivable.sort();
        drivable.print();
    }
}
drive(drivableCollections);
