"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharStar_1 = __importDefault(require("./CharStar"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const LinkedList_1 = __importDefault(require("./LinkedList"));
var Collections;
(function (Collections) {
    Collections["LinkedList"] = "LinkedList";
    Collections["Numbers"] = "Numbers";
    Collections["CharStar"] = "CharStar";
})(Collections || (Collections = {}));
function create(collection) {
    const unsorted = {
        numbers: [10, -3, -5, 0],
        string: 'XaAbyC',
        default: [5, 4, 3, 2, 1]
    };
    let sampleData = unsorted.numbers;
    switch (collection) {
        case Collections.CharStar: {
            sampleData = unsorted.string;
            return new CharStar_1.default(sampleData);
        }
        case Collections.LinkedList: {
            return LinkedList_1.default.fromValues(sampleData);
        }
        case Collections.Numbers: {
            return new NumbersCollection_1.default(sampleData);
        }
        default: {
            class Default extends NumbersCollection_1.default {
                constructor(data) { super(data); }
            }
            return new Default(unsorted.default);
        }
    }
}
exports.default = {
    createNumbers: () => create(Collections.Numbers),
    createLinkedList: () => create(Collections.LinkedList),
    createString: () => create(Collections.CharStar),
    createDefault: () => create(),
};
