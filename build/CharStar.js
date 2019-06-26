"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class CharStar extends Sorter_1.default {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const characters = this.data.split('');
        const characterLeft = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = characterLeft;
        this.data = characters.join('');
    }
    print() {
        console.log(this.constructor.name + ': "' + this.data + '"');
    }
}
exports.default = CharStar;
