"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length, compare, swap } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (compare(j, j + 1)) {
                    swap(j, j + 1);
                }
            }
        }
    }
    print() {
        this.collection.print();
    }
}
exports.default = Sorter;
