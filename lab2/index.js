class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

    // toString = () => {
    //     return `Node: data = ${ this.data }, next = ${ this.next }`;
    // }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend = (data) => {
        const node = new Node(data, this.head);
        this.head = node;

        if (this.tail === null) {
            this.tail = node;
        }
    }

    apend = (data) => {
        const node = new Node (data, null);
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;

        if (this.head === null) {
            this.head = node;
        }
    }

    find = (data) => {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (data !== node.data) {
            node = node.next;
        }
        return node;
    }

    insertAfter = (data, node) => {
        const next = node.next;
        node.next = new Node(data, next);

        if (node === this.tail) {
            this.tail = node.next;
        }
    }

    delete = (data) => {
        if (!this.head) {
            return null;
        }

        let prev = null;
        let node = this.head;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        while (data !== node.data) {
            if (node.next === null) {
                return;
            }

            prev = node;
            node = node.next;
        }

        if (this.tail === node) {
            this.tail = prev;
        }
        prev.next = node.next;
        return node;
    }

    deleteHead = () => {
        if (!this.head) {
            return null;
        }

        if (this.tail === this.head) {
            this.tail = null;
        }

        const node = this.head;
        this.head = this.head.next;
        return node;
    }

    fromArray = (arr) => {
        arr.forEach((data) => {
            this.apend(data);
        });
    }
}


const list = new LinkedList();
list.apend(7);
list.apend(3);
list.apend(5);
// console.log(list.head);

const node = list.find(3);
list.insertAfter(8, node);
// console.log(list.head);

list.delete(6);
// console.log(list.head);
// console.log(list.tail);

const deleted = list.deleteHead();
// console.log(list.head);
// console.log(deleted);

const arr = [5, 4, 9, 1];
list.fromArray(arr);
console.log(list.head.next.next.next);
console.log(list.tail);
