"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                const [leftIdx, rightIdx] = [j, j + 1];
                if (this.compare(leftIdx, rightIdx)) {
                    this.swap(leftIdx, rightIdx);
                }
            }
        }
    }
}
exports.default = Sorter;
