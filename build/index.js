"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const CharStar_1 = __importDefault(require("./CharStar"));
const LinkedList_1 = __importDefault(require("./LinkedList"));
const unsortedValues = [10, -3, -5, 0];
const unsortedString = 'XaAbyC';
const numbersCollection = new NumbersCollection_1.default(unsortedValues);
const charactersCollection = new CharStar_1.default(unsortedString);
const linkedListCollection = new LinkedList_1.default();
linkedListCollection.fillWith(unsortedValues);
const collections = [
    numbersCollection,
    charactersCollection,
    linkedListCollection,
];
driver(collections);
function driver(drivables) {
    for (const drivable of drivables) {
        drivable.sort();
        drivable.print();
    }
}
