"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharStar {
    constructor(data) {
        this.data = data;
        this.compare = this.compare.bind(this);
        this.swap = this.swap.bind(this);
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
