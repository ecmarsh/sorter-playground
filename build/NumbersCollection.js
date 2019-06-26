"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class NumbersCollection extends Sorter_1.default {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    swap(leftIdx, rightIdx) {
        const dataLeft = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = dataLeft;
    }
    print() {
        console.log(this.constructor.name + ': [' + this.data + ']');
    }
}
exports.default = NumbersCollection;
