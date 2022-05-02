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

// ------- 1

const list = new LinkedList();
const arr = [5, 4, 9, 1];
list.fromArray(arr);

function deepClone(list) {
    const copy = new LinkedList();
    let node = list.head;
    while (node !== null) {
        copy.apend(node.data);
        node = node.next;
    }

    return copy;
}

const clone = deepClone(list);
console.log(clone.head);
console.log('-----------------------------------');

// ------- 2

function sort(list) {
    const arr = [];
    while (list.head !== null) {
        const node = list.deleteHead();
        arr.push(node.data);
    }
    arr.sort((a, b) => a - b);
    list.fromArray(arr);
}

sort(clone);
console.log(clone.head);
console.log('-----------------------------------');

// ------- 3

const surnames = new LinkedList();
surnames.fromArray([ 'Arestovich', 'Bondar', 'Kim', 'Ternovyi' ]);

const tickets = new LinkedList();
tickets.fromArray([ 1, 21, 13, 56, 2, 9 ]);

function exam(list1, list2) {
    while (list1.head !== null) {
        const surname = list1.deleteHead();
        const ticket = list2.deleteHead();
        console.log(`student ${surname.data} - №${ticket.data} ticket`);
    }
}

exam(surnames, tickets);
console.log('-----------------------------------');

// ------- 4

const M = 2;
const N = 3;

const customers = new LinkedList();
customers.fromArray([ 'Arestovich', 'Bondar', 'Kim', 'Ternovyi', 'Dantes' ]);

const goods = new LinkedList();
goods.fromArray([ 'apple', 'milk', 'bread', 'chocolate', 'orandge', 'sugar', 'rice', 'salt', 'buckwheat', 'corn' ]);

function iteration(node, index) {
    if (!node) {
        return null;
    }

    if (index !== 1) {
        return iteration(node.next, index - 1);
    }
    return node.next;
}

let customer = customers.head;
let good = goods.head;
while (customer !== null) {
    console.log(`customer ${customer.data} bought ${good.data}`);
    customer = iteration(customer, M);
    good = iteration(good, N);
}
