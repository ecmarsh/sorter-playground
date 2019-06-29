"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersCollection {
    constructor(data) {
        this.data = data;
        this.compare = (leftIdx, rightIdx) => {
            return this.data[leftIdx] > this.data[rightIdx];
        };
        this.swap = (leftIdx, rightIdx) => {
            const dataLeft = this.data[leftIdx];
            this.data[leftIdx] = this.data[rightIdx];
            this.data[rightIdx] = dataLeft;
        };
    }
    get length() {
        return this.data.length;
    }
    get displayName() {
        return `${this.constructor.name}: [${this.data}]`;
    }
}
exports.default = NumbersCollection;
