"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersCollection {
    constructor(data) {
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
    get displayName() {
        return `${this.constructor.name}: [${this.data}]`;
    }
}
exports.default = NumbersCollection;
