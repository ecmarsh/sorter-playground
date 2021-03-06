"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharStar {
    constructor(data) {
        this.data = data;
        this.compare = (leftIdx, rightIdx) => {
            return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
        };
        this.swap = (leftIdx, rightIdx) => {
            const characters = this.data.split('');
            const characterLeft = characters[leftIdx];
            characters[leftIdx] = characters[rightIdx];
            characters[rightIdx] = characterLeft;
            this.data = characters.join('');
        };
    }
    get length() {
        return this.data.length;
    }
    get displayName() {
        return `${this.constructor.name}: "${this.data}"`;
    }
}
exports.default = CharStar;
