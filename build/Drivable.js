"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
const Printer_1 = __importDefault(require("./Printer"));
const applyMixins_1 = require("./applyMixins");
class Drivable {
    constructor(drivable) {
        this.drivable = drivable;
        this.compare = this.drivable.compare;
        this.swap = this.drivable.swap;
        this.length = this.drivable.length;
    }
    get displayName() {
        return this.drivable.displayName;
    }
}
exports.default = Drivable;
applyMixins_1.applyMixins(Drivable, [Printer_1.default, Sorter_1.default]);
exports.generateDrivables = factory => {
    const generateAllFactoryValues = () => {
        let values = [];
        for (const key in factory) {
            const fn = factory[key];
            const value = fn();
            values.push(value);
        }
        return values;
    };
    const factoryInstances = generateAllFactoryValues();
    return factoryInstances.map(instance => new Drivable(instance));
};
