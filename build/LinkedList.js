"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(data = { head: null }, size = 0) {
        this.data = data;
        this.size = size;
    }
    get length() {
        return this.size;
    }
    compare(leftIdx, rightIdx) {
        const leftNode = this.accessAt(leftIdx);
        const rightNode = this.accessAt(rightIdx);
        if (leftNode && rightNode) {
            return leftNode.value > rightNode.value;
        }
        return false;
    }
    swap(leftIdx, rightIdx) {
        const leftNode = this.accessAt(leftIdx);
        const rightNode = this.accessAt(rightIdx);
        if (leftNode && rightNode) {
            const leftNodeValue = leftNode.value;
            leftNode.value = rightNode.value;
            rightNode.value = leftNodeValue;
        }
    }
    addAtTail(value) {
        let currentNode = this.data.head;
        if (!currentNode) {
            this.addAtHead(value);
        }
        else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }
        this.incrementSize();
    }
    accessAt(index) {
        let currentNode = this.data.head;
        let counter = 0;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        this.throwAcessError(index);
    }
    fillWith(values) {
        for (const value of values) {
            this.addAtTail(value);
        }
    }
    print() {
        let currentNode = this.data.head;
        const linkedListPrettified = [];
        while (currentNode) {
            const nodePrettified = Object.assign({}, currentNode);
            delete nodePrettified.next;
            linkedListPrettified.push(nodePrettified);
            currentNode = currentNode.next;
        }
        console.log(this.constructor.name + ':', linkedListPrettified);
    }
    incrementSize() {
        this.size++;
    }
    addAtHead(value) {
        this.data.head = new Node(value);
    }
    throwAcessError(index) {
        throw Error(`Cannot access at index ${index}`);
    }
}
exports.default = LinkedList;
